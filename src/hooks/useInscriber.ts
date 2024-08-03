import { useLaserEyes } from "../providers/LaserEyesProvider";
import { useCallback, useEffect, useState } from "react";
import { MIME_TYPE_TEXT } from "../consts/inscribe";
import { delay } from "../lib/helpers";
import axios from "axios";
import { CommitPsbtResponse } from "../types";

const DESCRIBE_API_URL = "http://localhost:3000/api";
export const useInscriber = ({
  inscribeApiUrl = DESCRIBE_API_URL,
}: {
  inscribeApiUrl: string;
}) => {
  const { address, paymentAddress, paymentPublicKey, publicKey, signPsbt } =
    useLaserEyes();
  const [content, setContent] = useState<any>("");
  const [mimeType, setMimeType] =
    useState<typeof MIME_TYPE_TEXT>(MIME_TYPE_TEXT);

  const [commitPsbtHex, setCommitPsbtHex] = useState<string>("");
  const [commitPsbtBase64, setCommitPsbtBase64] = useState<string>("");
  const [commitTxId, setCommitTxId] = useState<string>("");
  const [feeRate, setFeeRate] = useState<number>(10);
  const [totalFees, setTotalFees] = useState<number>(0);
  const [inscriberAddress, setInscriberAddress] = useState<string>("");
  const [inscriptionTxId, setInscriptionTxId] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const [isFetchingCommitPsbt, setIsFetchingCommitPsbt] =
    useState<boolean>(false);
  const [isInscribing, setIsInscribing] = useState<boolean>(false);

  const getCommitPsbt = useCallback(async () => {
    try {
      if (!content) throw new Error("missing content");
      if (!paymentAddress) throw new Error("missing paymentAddress");
      if (!paymentPublicKey) throw new Error("missing paymentPublicKey");
      if (!feeRate) throw new Error("missing feeRate");
      if (!mimeType) throw new Error("missing mimeType");
      setIsFetchingCommitPsbt(true);
      return await axios
        .post(`${inscribeApiUrl}/create-inscription`, {
          content,
          paymentAddress,
          paymentPublicKey,
          feeRate,
          mimeType,
        })
        .then((res) => res.data as CommitPsbtResponse)
        .then((data) => {
          setCommitPsbtHex(data.psbtHex);
          setCommitPsbtBase64(data.psbtBase64);
          setFeeRate(feeRate);
          setTotalFees(data.totalFees);
          setInscriberAddress(data.inscriberAddress);
          return data;
        });
    } catch (e) {
      console.error(e);
      // @ts-ignore
      throw e;
    } finally {
      setIsFetchingCommitPsbt(false);
    }
  }, [paymentAddress, paymentPublicKey, content, feeRate, mimeType, publicKey]);

  const handleSignCommit = async (tx: string) => {
    try {
      const signedResponse = await signPsbt(tx, true, true);
      setCommitTxId(signedResponse?.txId!);
      return signedResponse?.txId;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const inscribe = useCallback(async () => {
    try {
      setIsInscribing(true);
      if (!content) throw new Error("missing content");
      if (!address) throw new Error("missing address");
      if (!mimeType) throw new Error("missing mimeType");
      if (!commitTxId) {
        console.log("commitTxId not found, getting commit psbt");
        const signed = await getCommitPsbt();
        console.log({ signed });
        await handleSignCommit(signed.psbtBase64!);
      }

      await delay(10000);

      return await axios
        .post(`${inscribeApiUrl}/inscribe`, {
          content,
          mimeType,
          ordinalAddress: address,
          commitTxId,
        })
        .then((res) => res.data as string)
        .then((data) => {
          setInscriptionTxId(data);
          return data;
        });
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      setIsInscribing(false);
    }
  }, [address, commitTxId, content, mimeType]);

  const reset = () => {
    setContent("");
    setMimeType(MIME_TYPE_TEXT);
    setCommitPsbtHex("");
    setCommitPsbtBase64("");
    setCommitTxId("");
    setFeeRate(10);
    setTotalFees(0);
    setInscriberAddress("");
    setInscriptionTxId("");
    setPreviewUrl("");
  };

  useEffect(() => {
    if (commitTxId && !inscriptionTxId) {
      inscribe();
    }
  }, [commitTxId, inscribe, inscriptionTxId]);

  return {
    content,
    setContent,
    setMimeType,
    previewUrl,
    setPreviewUrl,
    getCommitPsbt,
    isFetchingCommitPsbt,
    commitPsbtHex,
    commitPsbtBase64,
    handleSignCommit,
    commitTxId,
    setCommitTxId,
    feeRate,
    setFeeRate,
    totalFees,
    inscriberAddress,
    inscribe,
    isInscribing,
    inscriptionTxId,
    reset,
  };
};
