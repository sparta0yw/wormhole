/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Migrator, MigratorInterface } from "../Migrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toAsset",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fromAsset",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fromDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toAsset",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001559380380620015598339810160408190526200003491620001dc565b6040518060400160405280601481526020017f546f6b656e204d6967726174696f6e20506f6f6c0000000000000000000000008152506040518060400160405280600b81526020016a04d69677261746f722d4c560ac1b81525081600390816200009f9190620002b9565b506004620000ae8282620002b9565b5050600580546001600160a01b038086166001600160a01b0319928316811790935560068054918616919092161790556040805163313ce56760e01b8152905191925063313ce5679160048083019260209291908290030181865afa1580156200011c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000142919062000385565b60ff16600781905550806001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200018a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b0919062000385565b60ff1660085550620003b19050565b80516001600160a01b0381168114620001d757600080fd5b919050565b60008060408385031215620001f057600080fd5b620001fb83620001bf565b91506200020b60208401620001bf565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200023f57607f821691505b6020821081036200026057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002b457600081815260208120601f850160051c810160208610156200028f5750805b601f850160051c820191505b81811015620002b0578281556001016200029b565b5050505b505050565b81516001600160401b03811115620002d557620002d562000214565b620002ed81620002e684546200022a565b8462000266565b602080601f8311600181146200032557600084156200030c5750858301515b600019600386901b1c1916600185901b178555620002b0565b600085815260208120601f198616915b82811015620003565788860151825594840194600190910190840162000335565b5085821015620003755787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200039857600080fd5b815160ff81168114620003aa57600080fd5b9392505050565b61119880620003c16000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80634cc82215116100ad57806395d89b411161007157806395d89b4114610262578063a457c2d71461026a578063a9059cbb1461027d578063dd62ed3e14610290578063f1354c08146102c957600080fd5b80634cc82215146101e95780634d92626a146101fc57806370a082311461020557806386e898431461022e57806392e404111461025957600080fd5b806323b872dd116100f457806323b872dd1461018e578063313ce567146101a1578063379607f5146101b057806339509351146101c3578063454b0608146101d657600080fd5b806306fdde0314610126578063095ea7b3146101445780631003e2d21461016757806318160ddd1461017c575b600080fd5b61012e6102dc565b60405161013b9190610e69565b60405180910390f35b610157610152366004610eb8565b61036e565b604051901515815260200161013b565b61017a610175366004610ee2565b610385565b005b6002545b60405190815260200161013b565b61015761019c366004610efb565b6103aa565b6040516012815260200161013b565b61017a6101be366004610ee2565b61045b565b6101576101d1366004610eb8565b61048e565b61017a6101e4366004610ee2565b6104ca565b61017a6101f7366004610ee2565b610506565b61018060075481565b610180610213366004610f37565b6001600160a01b031660009081526020819052604090205490565b600554610241906001600160a01b031681565b6040516001600160a01b03909116815260200161013b565b61018060085481565b61012e610527565b610157610278366004610eb8565b610536565b61015761028b366004610eb8565b6105cf565b61018061029e366004610f52565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600654610241906001600160a01b031681565b6060600380546102eb90610f85565b80601f016020809104026020016040519081016040528092919081815260200182805461031790610f85565b80156103645780601f1061033957610100808354040283529160200191610364565b820191906000526020600020905b81548152906001019060200180831161034757829003601f168201915b5050505050905090565b600061037b3384846105dc565b5060015b92915050565b60065461039d906001600160a01b0316333084610701565b6103a73382610772565b50565b60006103b7848484610851565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104415760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61044e85338584036105dc565b60019150505b9392505050565b6104653382610a1f565b6005546008546007546103a7926001600160a01b0316913391610489919086610b6a565b610bcb565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161037b9185906104c5908690610fd5565b6105dc565b6005546104e2906001600160a01b0316333084610701565b6006546007546008546103a7926001600160a01b0316913391610489919086610b6a565b6105103382610a1f565b6006546103a7906001600160a01b03163383610bcb565b6060600480546102eb90610f85565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105b85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610438565b6105c533858584036105dc565b5060019392505050565b600061037b338484610851565b6001600160a01b03831661063e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610438565b6001600160a01b03821661069f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610438565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6040516001600160a01b038085166024830152831660448201526064810182905261076c9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610bfb565b50505050565b6001600160a01b0382166107c85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610438565b80600260008282546107da9190610fd5565b90915550506001600160a01b03821660009081526020819052604081208054839290610807908490610fd5565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0383166108b55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610438565b6001600160a01b0382166109175760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610438565b6001600160a01b0383166000908152602081905260409020548181101561098f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610438565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109c6908490610fd5565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a1291815260200190565b60405180910390a361076c565b6001600160a01b038216610a7f5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610438565b6001600160a01b03821660009081526020819052604090205481811015610af35760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610438565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b22908490610fe8565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016106f4565b505050565b600082841115610b9a57610b7e8385610fe8565b610b8990600a6110df565b610b9390836110eb565b9150610bc4565b82841015610bc457610bac8484610fe8565b610bb790600a6110df565b610bc1908361110d565b91505b5092915050565b6040516001600160a01b038316602482015260448101829052610b6590849063a9059cbb60e01b90606401610735565b6000610c50826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610ccd9092919063ffffffff16565b805190915015610b655780806020019051810190610c6e9190611124565b610b655760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610438565b6060610cdc8484600085610ce4565b949350505050565b606082471015610d455760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610438565b843b610d935760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610438565b600080866001600160a01b03168587604051610daf9190611146565b60006040518083038185875af1925050503d8060008114610dec576040519150601f19603f3d011682016040523d82523d6000602084013e610df1565b606091505b5091509150610e01828286610e0c565b979650505050505050565b60608315610e1b575081610454565b825115610e2b5782518084602001fd5b8160405162461bcd60e51b81526004016104389190610e69565b60005b83811015610e60578181015183820152602001610e48565b50506000910152565b6020815260008251806020840152610e88816040850160208701610e45565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610eb357600080fd5b919050565b60008060408385031215610ecb57600080fd5b610ed483610e9c565b946020939093013593505050565b600060208284031215610ef457600080fd5b5035919050565b600080600060608486031215610f1057600080fd5b610f1984610e9c565b9250610f2760208501610e9c565b9150604084013590509250925092565b600060208284031215610f4957600080fd5b61045482610e9c565b60008060408385031215610f6557600080fd5b610f6e83610e9c565b9150610f7c60208401610e9c565b90509250929050565b600181811c90821680610f9957607f821691505b602082108103610fb957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561037f5761037f610fbf565b8181038181111561037f5761037f610fbf565b600181815b8085111561103657816000190482111561101c5761101c610fbf565b8085161561102957918102915b93841c9390800290611000565b509250929050565b60008261104d5750600161037f565b8161105a5750600061037f565b8160018114611070576002811461107a57611096565b600191505061037f565b60ff84111561108b5761108b610fbf565b50506001821b61037f565b5060208310610133831016604e8410600b84101617156110b9575081810a61037f565b6110c38383610ffb565b80600019048211156110d7576110d7610fbf565b029392505050565b6000610454838361103e565b60008261110857634e487b7160e01b600052601260045260246000fd5b500490565b808202811582820484141761037f5761037f610fbf565b60006020828403121561113657600080fd5b8151801515811461045457600080fd5b60008251611158818460208701610e45565b919091019291505056fea2646970667358221220d0de59701b989e1a6445e8b5281a0f20bf5ace1ae6203e6b69c507019592060c64736f6c63430008110033";

type MigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Migrator__factory extends ContractFactory {
  constructor(...args: MigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _fromAsset: PromiseOrValue<string>,
    _toAsset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Migrator> {
    return super.deploy(
      _fromAsset,
      _toAsset,
      overrides || {}
    ) as Promise<Migrator>;
  }
  override getDeployTransaction(
    _fromAsset: PromiseOrValue<string>,
    _toAsset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_fromAsset, _toAsset, overrides || {});
  }
  override attach(address: string): Migrator {
    return super.attach(address) as Migrator;
  }
  override connect(signer: Signer): Migrator__factory {
    return super.connect(signer) as Migrator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigratorInterface {
    return new utils.Interface(_abi) as MigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Migrator {
    return new Contract(address, _abi, signerOrProvider) as Migrator;
  }
}
