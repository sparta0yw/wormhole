/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  RelayProviderImplementation,
  RelayProviderImplementationInterface,
} from "../RelayProviderImplementation";

const _abi = [
  {
    inputs: [],
    name: "AddressIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerMustBeOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerMustBePendingOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
    ],
    name: "CallerNotApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ChainIdIsZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "FailedToInitializeImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "GasPriceIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "ImplementationAlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeCurrencyPriceIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongChainId",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovedSenderUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "buffer",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "bufferDenominator",
        type: "uint16",
      },
    ],
    name: "AssetConversionBufferUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    name: "ContractUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "coreRelayer",
        type: "address",
      },
    ],
    name: "CoreRelayerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "oldGasOverhead",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "newGasOverhead",
        type: "uint32",
      },
    ],
    name: "DeliverGasOverheadUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAddress",
        type: "bytes32",
      },
    ],
    name: "DeliveryAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransfered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "RewardAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "approvedSender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "assetConversionBuffer",
    outputs: [
      {
        internalType: "uint16",
        name: "tolerance",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "toleranceDenominator",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmOwnershipTransferRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "coreRelayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "deliverGasOverhead",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes[]",
            name: "encodedVMs",
            type: "bytes[]",
          },
          {
            internalType: "bytes",
            name: "encodedDeliveryVAA",
            type: "bytes",
          },
          {
            internalType: "uint8",
            name: "multisendIndex",
            type: "uint8",
          },
          {
            internalType: "address payable",
            name: "relayerRefundAddress",
            type: "address",
          },
        ],
        internalType: "struct IDelivery.TargetDeliveryParametersSingle",
        name: "targetParams",
        type: "tuple",
      },
    ],
    name: "deliverSingle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "deliveryAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "whFormatAddress",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "gasPrice",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "getAssetConversionBuffer",
    outputs: [
      {
        internalType: "uint16",
        name: "tolerance",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "toleranceDenominator",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getConsistencyLevel",
    outputs: [
      {
        internalType: "uint8",
        name: "consistencyLevel",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "getDeliveryAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "whAddress",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "maximumBudget",
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
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "nativeCurrencyPrice",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
    ],
    name: "quoteAssetPrice",
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
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "quoteDeliveryOverhead",
    outputs: [
      {
        internalType: "uint256",
        name: "nativePriceQuote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "quoteGasPrice",
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
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "quoteMaximumBudget",
    outputs: [
      {
        internalType: "uint256",
        name: "maximumTargetBudget",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "quoteRedeliveryOverhead",
    outputs: [
      {
        internalType: "uint256",
        name: "nativePriceQuote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "redeliveryVM",
            type: "bytes",
          },
          {
            internalType: "bytes[]",
            name: "sourceEncodedVMs",
            type: "bytes[]",
          },
          {
            internalType: "bytes",
            name: "originalEncodedDeliveryVAA",
            type: "bytes",
          },
          {
            internalType: "address payable",
            name: "relayerRefundAddress",
            type: "address",
          },
        ],
        internalType: "struct IDelivery.TargetRedeliveryByTxHashParamsSingle",
        name: "targetParams",
        type: "tuple",
      },
    ],
    name: "redeliverSingle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "thisRelayerChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "submitOwnershipTransferRequest",
    outputs: [],
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
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "updateApprovedSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "buffer",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "bufferDenominator",
        type: "uint16",
      },
    ],
    name: "updateAssetConversionBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCoreRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "newGasOverhead",
        type: "uint32",
      },
    ],
    name: "updateDeliverGasOverhead",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "newAddress",
        type: "bytes32",
      },
    ],
    name: "updateDeliveryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "maximumTotalBudget",
        type: "uint256",
      },
    ],
    name: "updateMaximumBudget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "updateChainId",
        type: "uint16",
      },
      {
        internalType: "uint128",
        name: "updateGasPrice",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "updateNativeCurrencyPrice",
        type: "uint128",
      },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "uint128",
            name: "gasPrice",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "nativeCurrencyPrice",
            type: "uint128",
          },
        ],
        internalType: "struct RelayProviderStructs.UpdatePrice[]",
        name: "updates",
        type: "tuple[]",
      },
    ],
    name: "updatePrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateRewardAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "newWormholeFee",
        type: "uint32",
      },
    ],
    name: "updateWormholeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "relayProviderChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "wormholeFee",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611cd1806100206000396000f3fe6080604052600436106102305760003560e01c80638cf57cb91161012e578063ad4e44e7116100ab578063e30c39781161006f578063e30c397814610763578063e41a24ba14610781578063e8f62d41146107a1578063e8fec1ce146107c1578063ec1c450a146107df57600080fd5b8063ad4e44e7146106d5578063bb7c0a63146104a7578063bf9321fc146106f5578063d0fb67811461070a578063d60b347f1461072a57600080fd5b80639a8a0592116100f25780639a8a05921461063f578063a31bcc5014610662578063a4fb834614610682578063a83004a3146106a2578063abb7b0f6146106c257600080fd5b80638cf57cb9146105895780638da5cb5b146105bb578063944dd5a2146105df57806394cc743d146105ff578063973ef2151461061f57600080fd5b80634713de7a116101bc57806370ae19021161018057806370ae1902146104a75780637555049114610503578063787d7783146105235780637ebc751f146105435780638129fc1c1461057457600080fd5b80634713de7a1461038b57806349cdb88c146103e457806354c5c1661461041e578063673d232a146104675780636b13b5041461048757600080fd5b80633522be7d116102035780633522be7d146102c357806336ecc4fb146102e35780633e48e77314610303578063456eb3fe1461034f57806347099e441461036b57600080fd5b8063038c0b66146102355780631d2fd2cd1461024c5780632314357c1461025f5780633171aaec1461027f575b600080fd5b34801561024157600080fd5b5061024a610816565b005b61024a61025a36600461165b565b6108cd565b34801561026b57600080fd5b5061024a61027a366004611755565b610987565b34801561028b57600080fd5b506102b061029a366004611798565b61ffff1660009081526007602052604090205490565b6040519081526020015b60405180910390f35b3480156102cf57600080fd5b5061024a6102de3660046117b3565b610a66565b3480156102ef57600080fd5b5061024a6102fe3660046117ea565b610bed565b34801561030f57600080fd5b5061033a61031e366004611798565b61ffff1660009081526005602052604090205463ffffffff1690565b60405163ffffffff90911681526020016102ba565b34801561035b57600080fd5b5060405160c881526020016102ba565b34801561037757600080fd5b5061024a61038636600461181d565b610c8a565b34801561039757600080fd5b506103cc6103a6366004611798565b61ffff16600090815260046020526040902054600160801b90046001600160801b031690565b6040516001600160801b0390911681526020016102ba565b3480156103f057600080fd5b506103cc6103ff366004611798565b61ffff166000908152600460205260409020546001600160801b031690565b34801561042a57600080fd5b5061045761043936600461181d565b6001600160a01b031660009081526009602052604090205460ff1690565b60405190151581526020016102ba565b34801561047357600080fd5b5061024a61048236600461183a565b610d16565b34801561049357600080fd5b5061024a6104a236600461190d565b610dbf565b3480156104b357600080fd5b506104e86104c2366004611798565b61ffff9081166000908152600a6020526040902054808216926201000090910490911690565b6040805161ffff9384168152929091166020830152016102ba565b34801561050f57600080fd5b506102b061051e366004611798565b610e0d565b34801561052f57600080fd5b5061024a61053e36600461190d565b610e28565b34801561054f57600080fd5b506102b061055e366004611798565b61ffff1660009081526008602052604090205490565b34801561058057600080fd5b5061024a610e9c565b34801561059557600080fd5b50600b546001600160a01b03165b6040516001600160a01b0390911681526020016102ba565b3480156105c757600080fd5b506000546201000090046001600160a01b03166105a3565b3480156105eb57600080fd5b5061024a6105fa36600461181d565b610f3c565b34801561060b57600080fd5b5061024a61061a3660046117b3565b610fc0565b34801561062b57600080fd5b5061024a61063a366004611937565b61104a565b34801561064b57600080fd5b5060005460405161ffff90911681526020016102ba565b34801561066e57600080fd5b506102b061067d366004611798565b6110f4565b34801561068e57600080fd5b5061024a61069d366004611971565b611173565b3480156106ae57600080fd5b506102b06106bd366004611798565b611201565b61024a6106d03660046119a6565b61121a565b3480156106e157600080fd5b506102b06106f0366004611798565b611278565b34801561070157600080fd5b506105a3611283565b34801561071657600080fd5b506102b0610725366004611798565b6103a6565b34801561073657600080fd5b5061045761074536600461181d565b6001600160a01b031660009081526003602052604090205460ff1690565b34801561076f57600080fd5b506001546001600160a01b03166105a3565b34801561078d57600080fd5b5061024a61079c366004611971565b61129c565b3480156107ad57600080fd5b506102b06107bc366004611798565b6112f8565b3480156107cd57600080fd5b506002546001600160a01b03166105a3565b3480156107eb57600080fd5b5061033a6107fa366004611798565b61ffff1660009081526006602052604090205463ffffffff1690565b600061082a6001546001600160a01b031690565b9050336001600160a01b0382161461085557604051630106037360e21b815260040160405180910390fd5b600080546001600160a01b038381166201000090810262010000600160b01b03198416178455909104169061088990611337565b816001600160a01b0316816001600160a01b03167f0d18b5fd22306e373229b9439188228edca81207d1667f604daf6cef8aa3ee6760405160405180910390a35050565b6108d633610439565b61090657335b604051639d5d5ca760e01b81526001600160a01b0390911660048201526024015b60405180910390fd5b600061091a6002546001600160a01b031690565b336060840152604051631d2fd2cd60e01b81529091506001600160a01b03821690631d2fd2cd903490610951908690600401611aff565b6000604051808303818588803b15801561096a57600080fd5b505af115801561097e573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b03620100009091041633146109b95760405163c0e22f3d60e01b815260040160405180910390fd5b8261ffff166000036109de57604051631b1be67360e21b815260040160405180910390fd5b816001600160801b0316600003610a0857604051630657481960e21b815260040160405180910390fd5b806001600160801b0316600003610a3257604051630f47f0ed60e31b815260040160405180910390fd5b61ffff9290921660009081526004602052604090206001600160801b03928316600160801b0291909216179055565b505050565b6000546001600160a01b0362010000909104163314610a985760405163c0e22f3d60e01b815260040160405180910390fd5b60005461ffff838116911614610ac0576040516217e1ef60ea1b815260040160405180910390fd5b6000610af37f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050610afe82611359565b60408051600481526024810182526020810180516001600160e01b031663204a7f0760e21b179052905160009182916001600160a01b03861691610b4191611b79565b600060405180830381855af49150503d8060008114610b7c576040519150601f19603f3d011682016040523d82523d6000602084013e610b81565b606091505b509150915081610ba657806040516385f11c8360e01b81526004016108fd9190611b95565b836001600160a01b0316836001600160a01b03167f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a4960405160405180910390a35050505050565b6000546001600160a01b0362010000909104163314610c1f5760405163c0e22f3d60e01b815260040160405180910390fd5b6001600160a01b0382166000908152600960205260409020805460ff1916821515179055604080516001600160a01b038416815282151560208201527fe6832be792245f22a2305d194aa6a5d7a3c7e4d5c7589768e5ca955069d5d189910160405180910390a15050565b6000546001600160a01b0362010000909104163314610cbc5760405163c0e22f3d60e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383161790556040516001600160a01b03821681527f44baee065e7d326125597f921c10677714fde9936bfad09c477441a203ce19669060200160405180910390a150565b6000546001600160a01b0362010000909104163314610d485760405163c0e22f3d60e01b815260040160405180910390fd5b805160005b81811015610a6157610db7838281518110610d6a57610d6a611ba8565b602002602001015160000151848381518110610d8857610d88611ba8565b602002602001015160200151858481518110610da657610da6611ba8565b602002602001015160400151610987565b600101610d4d565b6000546001600160a01b0362010000909104163314610df15760405163c0e22f3d60e01b815260040160405180910390fd5b61ffff91909116600090815260076020526040902055565b5050565b61ffff81166000908152600760205260408120545b92915050565b6000546001600160a01b0362010000909104163314610e5a5760405163c0e22f3d60e01b815260040160405180910390fd5b61ffff8216600081815260086020526040808220849055518392917f5da7414ba9e01252e66f90776df7fa34d2c4e1477bdaccd0a7b396b25b01b8e591a35050565b6000610ecf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050610ef3816001600160a01b031660009081526003602052604090205460ff1690565b15610f11576040516316af21ab60e11b815260040160405180910390fd5b610f39816001600160a01b03166000908152600360205260409020805460ff19166001179055565b50565b6000546001600160a01b0362010000909104163314610f6e5760405163c0e22f3d60e01b815260040160405180910390fd5b600b80546001600160a01b0319166001600160a01b0383161790556040516001600160a01b038216907f97e1f675f69047e4b663d3b795841c629240f48eb403a6337e5367c4405737e090600090a250565b6000546001600160a01b0362010000909104163314610ff25760405163c0e22f3d60e01b815260040160405180910390fd5b60005461ffff83811691161461101a576040516217e1ef60ea1b815260040160405180910390fd5b6001600160a01b0381166110415760405163867915ab60e01b815260040160405180910390fd5b610e0981611337565b6000546001600160a01b036201000090910416331461107c5760405163c0e22f3d60e01b815260040160405180910390fd5b61ffff8381166000818152600a6020908152604091829020805487861663ffffffff19909116811762010000968816968702179091558251938452908301528181019290925290517faed3d5a75b6e523af32a68084c636eb7880958755291bb890cf7c8abc107a556916060908290030190a1505050565b61ffff81166000908152600660209081526040808320546004835281842054600590935290832054839263ffffffff928316926001600160801b039091169161113f91166001611bd4565b6111499190611bd4565b6111539190611beb565b905061116c838261116760005461ffff1690565b611399565b9392505050565b6000546001600160a01b03620100009091041633146111a55760405163c0e22f3d60e01b815260040160405180910390fd5b61ffff8216600090815260056020526040808220805463ffffffff85811663ffffffff19831681179093559251921692909183917f165d4d1ff6bc9ec853d7f08c1918b4a0263e67094a75cec368b7bd5cb4f6fbd491a3505050565b61ffff8116600090815260086020526040812054610e22565b61122333610439565b61122d57336108dc565b60006112416002546001600160a01b031690565b3360608401526040516355dbd87b60e11b81529091506001600160a01b0382169063abb7b0f6903490610951908690600401611bfe565b6000610e22826110f4565b6000611297600b546001600160a01b031690565b905090565b6000546001600160a01b03620100009091041633146112ce5760405163c0e22f3d60e01b815260040160405180910390fd5b61ffff82166000908152600660205260409020805463ffffffff191663ffffffff83161790555050565b6000610e22826113218461ffff166000908152600460205260409020546001600160801b031690565b6001600160801b031661116760005461ffff1690565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b611362816113ea565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6000806113a5856103a6565b905060006113b2846103a6565b9050806001816113c28589611bd4565b6113cc9190611beb565b6113d69190611c66565b6113e09190611c79565b9695505050505050565b803b61144e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016108fd565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156114c8576114c861148f565b60405290565b6040516060810167ffffffffffffffff811182821017156114c8576114c861148f565b604051601f8201601f1916810167ffffffffffffffff8111828210171561151a5761151a61148f565b604052919050565b600082601f83011261153357600080fd5b813567ffffffffffffffff81111561154d5761154d61148f565b611560601f8201601f19166020016114f1565b81815284602083860101111561157557600080fd5b816020850160208301376000918101602001919091529392505050565b600067ffffffffffffffff8211156115ac576115ac61148f565b5060051b60200190565b600082601f8301126115c757600080fd5b813560206115dc6115d783611592565b6114f1565b82815260059290921b840181019181810190868411156115fb57600080fd5b8286015b8481101561163b57803567ffffffffffffffff81111561161f5760008081fd5b61162d8986838b0101611522565b8452509183019183016115ff565b509695505050505050565b6001600160a01b0381168114610f3957600080fd5b60006020828403121561166d57600080fd5b813567ffffffffffffffff8082111561168557600080fd5b908301906080828603121561169957600080fd5b6116a16114a5565b8235828111156116b057600080fd5b6116bc87828601611522565b8252506020830135828111156116d157600080fd5b6116dd878286016115b6565b6020830152506040830135828111156116f557600080fd5b61170187828601611522565b6040830152506060830135925061171783611646565b6060810192909252509392505050565b803561ffff8116811461173957600080fd5b919050565b80356001600160801b038116811461173957600080fd5b60008060006060848603121561176a57600080fd5b61177384611727565b92506117816020850161173e565b915061178f6040850161173e565b90509250925092565b6000602082840312156117aa57600080fd5b61116c82611727565b600080604083850312156117c657600080fd5b6117cf83611727565b915060208301356117df81611646565b809150509250929050565b600080604083850312156117fd57600080fd5b823561180881611646565b9150602083013580151581146117df57600080fd5b60006020828403121561182f57600080fd5b813561116c81611646565b6000602080838503121561184d57600080fd5b823567ffffffffffffffff81111561186457600080fd5b8301601f8101851361187557600080fd5b80356118836115d782611592565b818152606091820283018401918482019190888411156118a257600080fd5b938501935b838510156119015780858a0312156118bf5760008081fd5b6118c76114ce565b6118d086611727565b81526118dd87870161173e565b8782015260406118ee81880161173e565b90820152835293840193918501916118a7565b50979650505050505050565b6000806040838503121561192057600080fd5b61192983611727565b946020939093013593505050565b60008060006060848603121561194c57600080fd5b61195584611727565b925061196360208501611727565b915061178f60408501611727565b6000806040838503121561198457600080fd5b61198d83611727565b9150602083013563ffffffff811681146117df57600080fd5b6000602082840312156119b857600080fd5b813567ffffffffffffffff808211156119d057600080fd5b90830190608082860312156119e457600080fd5b6119ec6114a5565b8235828111156119fb57600080fd5b611a07878286016115b6565b825250602083013582811115611a1c57600080fd5b611a2887828601611522565b6020830152506040830135915060ff82168214611a4457600080fd5b8160408201526060830135925061171783611646565b60005b83811015611a75578181015183820152602001611a5d565b50506000910152565b60008151808452611a96816020860160208601611a5a565b601f01601f19169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b85811015611af2578284038952611ae0848351611a7e565b98850198935090840190600101611ac8565b5091979650505050505050565b602081526000825160806020840152611b1b60a0840182611a7e565b90506020840151601f1980858403016040860152611b398383611aaa565b9250604086015191508085840301606086015250611b578282611a7e565b606095909501516001600160a01b031660809490940193909352509192915050565b60008251611b8b818460208701611a5a565b9190910192915050565b60208152600061116c6020830184611a7e565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610e2257610e22611bbe565b80820180821115610e2257610e22611bbe565b602081526000825160806020840152611c1a60a0840182611aaa565b90506020840151601f19848303016040850152611c378282611a7e565b604086015160ff16606086810191909152909501516001600160a01b0316608090940193909352509192915050565b81810381811115610e2257610e22611bbe565b600082611c9657634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212203e4a1ae70bf72e8855a840e5b435763c9b81f2d0c7d4e3b8b9a2475a795af7a864736f6c63430008110033";

type RelayProviderImplementationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayProviderImplementationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayProviderImplementation__factory extends ContractFactory {
  constructor(...args: RelayProviderImplementationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayProviderImplementation> {
    return super.deploy(
      overrides || {}
    ) as Promise<RelayProviderImplementation>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RelayProviderImplementation {
    return super.attach(address) as RelayProviderImplementation;
  }
  override connect(signer: Signer): RelayProviderImplementation__factory {
    return super.connect(signer) as RelayProviderImplementation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayProviderImplementationInterface {
    return new utils.Interface(_abi) as RelayProviderImplementationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayProviderImplementation {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RelayProviderImplementation;
  }
}
