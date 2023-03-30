/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CoreRelayerSetters,
  CoreRelayerSettersInterface,
} from "../CoreRelayerSetters";

const _abi = [
  {
    inputs: [],
    name: "InvalidEvmChainId",
    type: "error",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c34d58e872e446e7ada7bf122cfb4d766763771c3568525842946fc8c2113fa264736f6c63430008110033";

type CoreRelayerSettersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoreRelayerSettersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoreRelayerSetters__factory extends ContractFactory {
  constructor(...args: CoreRelayerSettersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CoreRelayerSetters> {
    return super.deploy(overrides || {}) as Promise<CoreRelayerSetters>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CoreRelayerSetters {
    return super.attach(address) as CoreRelayerSetters;
  }
  override connect(signer: Signer): CoreRelayerSetters__factory {
    return super.connect(signer) as CoreRelayerSetters__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoreRelayerSettersInterface {
    return new utils.Interface(_abi) as CoreRelayerSettersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoreRelayerSetters {
    return new Contract(address, _abi, signerOrProvider) as CoreRelayerSetters;
  }
}
