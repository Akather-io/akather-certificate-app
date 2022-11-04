/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { ICertificate } from "../app/my-certificate/certificate.type";
import { Wallet } from "./near-wallet";

export class NftCertificateNEAR {
  contractId: string;
  wallet: Wallet;

  constructor({
    contractId,
    walletToUse,
  }: {
    contractId: string;
    walletToUse: Wallet;
  }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  nft_tokens_for_owner(limit: number = 10): Promise<ICertificate[]> {
    return this.wallet.viewMethod({
      contractId: this.contractId,
      method: "nft_tokens_for_owner",
      args: {
        account_id: this.wallet.accountId,
      },
    });
  }
}
