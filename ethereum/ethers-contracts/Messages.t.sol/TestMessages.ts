/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Structs {
  export type GuardianSetStruct = {
    keys: PromiseOrValue<string>[];
    expirationTime: PromiseOrValue<BigNumberish>;
  };

  export type GuardianSetStructOutput = [string[], number] & {
    keys: string[];
    expirationTime: number;
  };

  export type SignatureStruct = {
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
    v: PromiseOrValue<BigNumberish>;
    guardianIndex: PromiseOrValue<BigNumberish>;
  };

  export type SignatureStructOutput = [string, string, number, number] & {
    r: string;
    s: string;
    v: number;
    guardianIndex: number;
  };

  export type VMStruct = {
    version: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
    emitterChainId: PromiseOrValue<BigNumberish>;
    emitterAddress: PromiseOrValue<BytesLike>;
    sequence: PromiseOrValue<BigNumberish>;
    consistencyLevel: PromiseOrValue<BigNumberish>;
    payload: PromiseOrValue<BytesLike>;
    guardianSetIndex: PromiseOrValue<BigNumberish>;
    signatures: Structs.SignatureStruct[];
    hash: PromiseOrValue<BytesLike>;
  };

  export type VMStructOutput = [
    number,
    number,
    number,
    number,
    string,
    BigNumber,
    number,
    string,
    number,
    Structs.SignatureStructOutput[],
    string
  ] & {
    version: number;
    timestamp: number;
    nonce: number;
    emitterChainId: number;
    emitterAddress: string;
    sequence: BigNumber;
    consistencyLevel: number;
    payload: string;
    guardianSetIndex: number;
    signatures: Structs.SignatureStructOutput[];
    hash: string;
  };
}

export interface TestMessagesInterface extends utils.Interface {
  functions: {
    "IS_SCRIPT()": FunctionFragment;
    "IS_TEST()": FunctionFragment;
    "chainId()": FunctionFragment;
    "evmChainId()": FunctionFragment;
    "failed()": FunctionFragment;
    "getCurrentGuardianSetIndex()": FunctionFragment;
    "getGuardianSet(uint32)": FunctionFragment;
    "getGuardianSetExpiry()": FunctionFragment;
    "governanceActionIsConsumed(bytes32)": FunctionFragment;
    "governanceChainId()": FunctionFragment;
    "governanceContract()": FunctionFragment;
    "isFork()": FunctionFragment;
    "isInitialized(address)": FunctionFragment;
    "messageFee()": FunctionFragment;
    "nextSequence(address)": FunctionFragment;
    "parseAndVerifyVM(bytes)": FunctionFragment;
    "parseVM(bytes)": FunctionFragment;
    "quorum(uint256)": FunctionFragment;
    "setUp()": FunctionFragment;
    "testCannotVerifySignaturesWithInvalidSignature(bytes)": FunctionFragment;
    "testCannotVerifySignaturesWithOutOfBoundsSignature(bytes)": FunctionFragment;
    "testHashMismatchedVMIsNotVerified()": FunctionFragment;
    "testQuorum()": FunctionFragment;
    "testQuorumCanAlwaysBeReached(uint256)": FunctionFragment;
    "testVerifySignatures(bytes)": FunctionFragment;
    "verifySignatures(bytes32,(bytes32,bytes32,uint8,uint8)[],(address[],uint32))": FunctionFragment;
    "verifyVM((uint8,uint32,uint32,uint16,bytes32,uint64,uint8,bytes,uint32,(bytes32,bytes32,uint8,uint8)[],bytes32))": FunctionFragment;
    "vm()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_SCRIPT"
      | "IS_TEST"
      | "chainId"
      | "evmChainId"
      | "failed"
      | "getCurrentGuardianSetIndex"
      | "getGuardianSet"
      | "getGuardianSetExpiry"
      | "governanceActionIsConsumed"
      | "governanceChainId"
      | "governanceContract"
      | "isFork"
      | "isInitialized"
      | "messageFee"
      | "nextSequence"
      | "parseAndVerifyVM"
      | "parseVM"
      | "quorum"
      | "setUp"
      | "testCannotVerifySignaturesWithInvalidSignature"
      | "testCannotVerifySignaturesWithOutOfBoundsSignature"
      | "testHashMismatchedVMIsNotVerified"
      | "testQuorum"
      | "testQuorumCanAlwaysBeReached"
      | "testVerifySignatures"
      | "verifySignatures"
      | "verifyVM"
      | "vm"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "evmChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrentGuardianSetIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardianSet",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardianSetExpiry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceActionIsConsumed",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "governanceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isFork", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "messageFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextSequence",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "parseAndVerifyVM",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "parseVM",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "quorum",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "testCannotVerifySignaturesWithInvalidSignature",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "testCannotVerifySignaturesWithOutOfBoundsSignature",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "testHashMismatchedVMIsNotVerified",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testQuorum",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testQuorumCanAlwaysBeReached",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "testVerifySignatures",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySignatures",
    values: [
      PromiseOrValue<BytesLike>,
      Structs.SignatureStruct[],
      Structs.GuardianSetStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyVM",
    values: [Structs.VMStruct]
  ): string;
  encodeFunctionData(functionFragment: "vm", values?: undefined): string;

  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "evmChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentGuardianSetIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardianSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardianSetExpiry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceActionIsConsumed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isFork", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messageFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextSequence",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseAndVerifyVM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "parseVM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testCannotVerifySignaturesWithInvalidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCannotVerifySignaturesWithOutOfBoundsSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testHashMismatchedVMIsNotVerified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testQuorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testQuorumCanAlwaysBeReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testVerifySignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifyVM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;

  events: {
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_array(uint256[])": EventFragment;
    "log_array(int256[])": EventFragment;
    "log_array(address[])": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_array(string,uint256[])": EventFragment;
    "log_named_array(string,int256[])": EventFragment;
    "log_named_array(string,address[])": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(uint256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(int256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(address[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,uint256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,int256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,address[])"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export interface logEventObject {
  arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;

export type logEventFilter = TypedEventFilter<logEvent>;

export interface log_addressEventObject {
  arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export interface log_array_uint256_array_EventObject {
  val: BigNumber[];
}
export type log_array_uint256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_uint256_array_EventObject
>;

export type log_array_uint256_array_EventFilter =
  TypedEventFilter<log_array_uint256_array_Event>;

export interface log_array_int256_array_EventObject {
  val: BigNumber[];
}
export type log_array_int256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_int256_array_EventObject
>;

export type log_array_int256_array_EventFilter =
  TypedEventFilter<log_array_int256_array_Event>;

export interface log_array_address_array_EventObject {
  val: string[];
}
export type log_array_address_array_Event = TypedEvent<
  [string[]],
  log_array_address_array_EventObject
>;

export type log_array_address_array_EventFilter =
  TypedEventFilter<log_array_address_array_Event>;

export interface log_bytesEventObject {
  arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export interface log_bytes32EventObject {
  arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export interface log_intEventObject {
  arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export interface log_named_addressEventObject {
  key: string;
  val: string;
}
export type log_named_addressEvent = TypedEvent<
  [string, string],
  log_named_addressEventObject
>;

export type log_named_addressEventFilter =
  TypedEventFilter<log_named_addressEvent>;

export interface log_named_array_string_uint256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_uint256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_uint256_array_EventObject
>;

export type log_named_array_string_uint256_array_EventFilter =
  TypedEventFilter<log_named_array_string_uint256_array_Event>;

export interface log_named_array_string_int256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_int256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_int256_array_EventObject
>;

export type log_named_array_string_int256_array_EventFilter =
  TypedEventFilter<log_named_array_string_int256_array_Event>;

export interface log_named_array_string_address_array_EventObject {
  key: string;
  val: string[];
}
export type log_named_array_string_address_array_Event = TypedEvent<
  [string, string[]],
  log_named_array_string_address_array_EventObject
>;

export type log_named_array_string_address_array_EventFilter =
  TypedEventFilter<log_named_array_string_address_array_Event>;

export interface log_named_bytesEventObject {
  key: string;
  val: string;
}
export type log_named_bytesEvent = TypedEvent<
  [string, string],
  log_named_bytesEventObject
>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export interface log_named_bytes32EventObject {
  key: string;
  val: string;
}
export type log_named_bytes32Event = TypedEvent<
  [string, string],
  log_named_bytes32EventObject
>;

export type log_named_bytes32EventFilter =
  TypedEventFilter<log_named_bytes32Event>;

export interface log_named_decimal_intEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_intEventObject
>;

export type log_named_decimal_intEventFilter =
  TypedEventFilter<log_named_decimal_intEvent>;

export interface log_named_decimal_uintEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_uintEventObject
>;

export type log_named_decimal_uintEventFilter =
  TypedEventFilter<log_named_decimal_uintEvent>;

export interface log_named_intEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_intEvent = TypedEvent<
  [string, BigNumber],
  log_named_intEventObject
>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export interface log_named_stringEventObject {
  key: string;
  val: string;
}
export type log_named_stringEvent = TypedEvent<
  [string, string],
  log_named_stringEventObject
>;

export type log_named_stringEventFilter =
  TypedEventFilter<log_named_stringEvent>;

export interface log_named_uintEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<
  [string, BigNumber],
  log_named_uintEventObject
>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export interface log_stringEventObject {
  arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export interface log_uintEventObject {
  arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export interface logsEventObject {
  arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface TestMessages extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestMessagesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    chainId(overrides?: CallOverrides): Promise<[number]>;

    evmChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCurrentGuardianSetIndex(overrides?: CallOverrides): Promise<[number]>;

    getGuardianSet(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Structs.GuardianSetStructOutput]>;

    getGuardianSetExpiry(overrides?: CallOverrides): Promise<[number]>;

    governanceActionIsConsumed(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    governanceChainId(overrides?: CallOverrides): Promise<[number]>;

    governanceContract(overrides?: CallOverrides): Promise<[string]>;

    isFork(overrides?: CallOverrides): Promise<[boolean]>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    messageFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextSequence(
      emitter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    parseAndVerifyVM(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [Structs.VMStructOutput, boolean, string] & {
        vm: Structs.VMStructOutput;
        valid: boolean;
        reason: string;
      }
    >;

    parseVM(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[Structs.VMStructOutput] & { vm: Structs.VMStructOutput }>;

    quorum(
      numGuardians: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { numSignaturesRequiredForQuorum: BigNumber }>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCannotVerifySignaturesWithInvalidSignature(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testCannotVerifySignaturesWithOutOfBoundsSignature(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testHashMismatchedVMIsNotVerified(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testQuorum(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testQuorumCanAlwaysBeReached(
      numGuardians: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testVerifySignatures(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifySignatures(
      hash: PromiseOrValue<BytesLike>,
      signatures: Structs.SignatureStruct[],
      guardianSet: Structs.GuardianSetStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { valid: boolean; reason: string }>;

    verifyVM(
      vm: Structs.VMStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { valid: boolean; reason: string }>;

    vm(overrides?: CallOverrides): Promise<[string]>;
  };

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  chainId(overrides?: CallOverrides): Promise<number>;

  evmChainId(overrides?: CallOverrides): Promise<BigNumber>;

  failed(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCurrentGuardianSetIndex(overrides?: CallOverrides): Promise<number>;

  getGuardianSet(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Structs.GuardianSetStructOutput>;

  getGuardianSetExpiry(overrides?: CallOverrides): Promise<number>;

  governanceActionIsConsumed(
    hash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  governanceChainId(overrides?: CallOverrides): Promise<number>;

  governanceContract(overrides?: CallOverrides): Promise<string>;

  isFork(overrides?: CallOverrides): Promise<boolean>;

  isInitialized(
    impl: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  messageFee(overrides?: CallOverrides): Promise<BigNumber>;

  nextSequence(
    emitter: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  parseAndVerifyVM(
    encodedVM: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [Structs.VMStructOutput, boolean, string] & {
      vm: Structs.VMStructOutput;
      valid: boolean;
      reason: string;
    }
  >;

  parseVM(
    encodedVM: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<Structs.VMStructOutput>;

  quorum(
    numGuardians: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setUp(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCannotVerifySignaturesWithInvalidSignature(
    encoded: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testCannotVerifySignaturesWithOutOfBoundsSignature(
    encoded: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testHashMismatchedVMIsNotVerified(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testQuorum(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testQuorumCanAlwaysBeReached(
    numGuardians: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testVerifySignatures(
    encoded: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifySignatures(
    hash: PromiseOrValue<BytesLike>,
    signatures: Structs.SignatureStruct[],
    guardianSet: Structs.GuardianSetStruct,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { valid: boolean; reason: string }>;

  verifyVM(
    vm: Structs.VMStruct,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { valid: boolean; reason: string }>;

  vm(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    chainId(overrides?: CallOverrides): Promise<number>;

    evmChainId(overrides?: CallOverrides): Promise<BigNumber>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    getCurrentGuardianSetIndex(overrides?: CallOverrides): Promise<number>;

    getGuardianSet(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Structs.GuardianSetStructOutput>;

    getGuardianSetExpiry(overrides?: CallOverrides): Promise<number>;

    governanceActionIsConsumed(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    governanceChainId(overrides?: CallOverrides): Promise<number>;

    governanceContract(overrides?: CallOverrides): Promise<string>;

    isFork(overrides?: CallOverrides): Promise<boolean>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    messageFee(overrides?: CallOverrides): Promise<BigNumber>;

    nextSequence(
      emitter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseAndVerifyVM(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [Structs.VMStructOutput, boolean, string] & {
        vm: Structs.VMStructOutput;
        valid: boolean;
        reason: string;
      }
    >;

    parseVM(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<Structs.VMStructOutput>;

    quorum(
      numGuardians: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setUp(overrides?: CallOverrides): Promise<void>;

    testCannotVerifySignaturesWithInvalidSignature(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    testCannotVerifySignaturesWithOutOfBoundsSignature(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    testHashMismatchedVMIsNotVerified(overrides?: CallOverrides): Promise<void>;

    testQuorum(overrides?: CallOverrides): Promise<void>;

    testQuorumCanAlwaysBeReached(
      numGuardians: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    testVerifySignatures(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifySignatures(
      hash: PromiseOrValue<BytesLike>,
      signatures: Structs.SignatureStruct[],
      guardianSet: Structs.GuardianSetStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { valid: boolean; reason: string }>;

    verifyVM(
      vm: Structs.VMStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { valid: boolean; reason: string }>;

    vm(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_array(uint256[])"(val?: null): log_array_uint256_array_EventFilter;
    "log_array(int256[])"(val?: null): log_array_int256_array_EventFilter;
    "log_array(address[])"(val?: null): log_array_address_array_EventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(
      key?: null,
      val?: null
    ): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_array(string,uint256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_uint256_array_EventFilter;
    "log_named_array(string,int256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_int256_array_EventFilter;
    "log_named_array(string,address[])"(
      key?: null,
      val?: null
    ): log_named_array_string_address_array_EventFilter;

    "log_named_bytes(string,bytes)"(
      key?: null,
      val?: null
    ): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(
      key?: null,
      val?: null
    ): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(
      key?: null,
      val?: null
    ): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(
      key?: null,
      val?: null
    ): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(
      key?: null,
      val?: null
    ): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    evmChainId(overrides?: CallOverrides): Promise<BigNumber>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCurrentGuardianSetIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getGuardianSet(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGuardianSetExpiry(overrides?: CallOverrides): Promise<BigNumber>;

    governanceActionIsConsumed(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governanceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    governanceContract(overrides?: CallOverrides): Promise<BigNumber>;

    isFork(overrides?: CallOverrides): Promise<BigNumber>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageFee(overrides?: CallOverrides): Promise<BigNumber>;

    nextSequence(
      emitter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseAndVerifyVM(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseVM(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quorum(
      numGuardians: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCannotVerifySignaturesWithInvalidSignature(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testCannotVerifySignaturesWithOutOfBoundsSignature(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testHashMismatchedVMIsNotVerified(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testQuorum(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testQuorumCanAlwaysBeReached(
      numGuardians: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testVerifySignatures(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifySignatures(
      hash: PromiseOrValue<BytesLike>,
      signatures: Structs.SignatureStruct[],
      guardianSet: Structs.GuardianSetStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyVM(
      vm: Structs.VMStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    evmChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCurrentGuardianSetIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGuardianSet(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGuardianSetExpiry(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceActionIsConsumed(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFork(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextSequence(
      emitter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseAndVerifyVM(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseVM(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quorum(
      numGuardians: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCannotVerifySignaturesWithInvalidSignature(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testCannotVerifySignaturesWithOutOfBoundsSignature(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testHashMismatchedVMIsNotVerified(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testQuorum(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testQuorumCanAlwaysBeReached(
      numGuardians: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testVerifySignatures(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifySignatures(
      hash: PromiseOrValue<BytesLike>,
      signatures: Structs.SignatureStruct[],
      guardianSet: Structs.GuardianSetStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyVM(
      vm: Structs.VMStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
