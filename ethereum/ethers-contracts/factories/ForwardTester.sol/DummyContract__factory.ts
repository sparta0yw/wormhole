/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DummyContract,
  DummyContractInterface,
} from "../../ForwardTester.sol/DummyContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wormholeRelayer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "targetAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "refundAddress",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxTransactionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum IWormholeRelayer.MessageInfoType",
            name: "infoType",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "vaaHash",
            type: "bytes32",
          },
        ],
        internalType: "struct IWormholeRelayer.MessageInfo[]",
        name: "messages",
        type: "tuple[]",
      },
    ],
    name: "forward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103e63803806103e683398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610353806100936000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633d5f8e7414610030575b600080fd5b61004361003e366004610129565b610045565b005b600054604051630f57e39d60e21b81526001600160a01b0390911690633d5f8e749061007f90899089908990899089908990600401610268565b600060405180830381600087803b15801561009957600080fd5b505af11580156100ad573d6000803e3d6000fd5b50505050505050505050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156100f2576100f26100b9565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610121576101216100b9565b604052919050565b60008060008060008060c0878903121561014257600080fd5b863561ffff8116811461015457600080fd5b9550602087810135955060408801359450606088013593506080880135925060a088013567ffffffffffffffff8082111561018e57600080fd5b818a0191508a601f8301126101a257600080fd5b8135818111156101b4576101b46100b9565b6101c2848260051b016100f8565b81815260079190911b8301840190848101908d8311156101e157600080fd5b938501935b82851015610255576080858f0312156101ff5760008081fd5b6102076100cf565b8535600281106102175760008081fd5b81528587013587820152604086013585811681146102355760008081fd5b6040820152606086810135908201528252608090940193908501906101e6565b8096505050505050509295509295509295565b600060c0820161ffff891683526020888185015260408881860152606088818701526080888188015260c060a088015284885180875260e089019150858a0196506000805b828110156103085788518051600281106102d557634e487b7160e01b84526021600452602484fd5b855280890151898601528781015167ffffffffffffffff16888601528601518685015297870197928401926001016102ad565b50919f9e50505050505050505050505050505056fea264697066735822122022db297d142492bcf3e50d9d568d236c7d14b005ea8bb5bd8767ab34cd286b4364736f6c63430008110033";

type DummyContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyContract__factory extends ContractFactory {
  constructor(...args: DummyContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _wormholeRelayer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DummyContract> {
    return super.deploy(
      _wormholeRelayer,
      overrides || {}
    ) as Promise<DummyContract>;
  }
  override getDeployTransaction(
    _wormholeRelayer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_wormholeRelayer, overrides || {});
  }
  override attach(address: string): DummyContract {
    return super.attach(address) as DummyContract;
  }
  override connect(signer: Signer): DummyContract__factory {
    return super.connect(signer) as DummyContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyContractInterface {
    return new utils.Interface(_abi) as DummyContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyContract {
    return new Contract(address, _abi, signerOrProvider) as DummyContract;
  }
}
