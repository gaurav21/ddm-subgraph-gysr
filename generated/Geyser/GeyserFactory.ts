// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GeyserCreated extends ethereum.Event {
  get params(): GeyserCreated__Params {
    return new GeyserCreated__Params(this);
  }
}

export class GeyserCreated__Params {
  _event: GeyserCreated;

  constructor(event: GeyserCreated) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get geyser(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GeyserFactory extends ethereum.SmartContract {
  static bind(address: Address): GeyserFactory {
    return new GeyserFactory("GeyserFactory", address);
  }

  list(param0: BigInt): Address {
    let result = super.call("list", "list(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_list(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("list", "list(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  map(param0: Address): boolean {
    let result = super.call("map", "map(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_map(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("map", "map(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  create(
    stakingToken: Address,
    rewardToken: Address,
    bonusMin: BigInt,
    bonusMax: BigInt,
    bonusPeriod: BigInt
  ): Address {
    let result = super.call(
      "create",
      "create(address,address,uint256,uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(stakingToken),
        ethereum.Value.fromAddress(rewardToken),
        ethereum.Value.fromUnsignedBigInt(bonusMin),
        ethereum.Value.fromUnsignedBigInt(bonusMax),
        ethereum.Value.fromUnsignedBigInt(bonusPeriod)
      ]
    );

    return result[0].toAddress();
  }

  try_create(
    stakingToken: Address,
    rewardToken: Address,
    bonusMin: BigInt,
    bonusMax: BigInt,
    bonusPeriod: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "create",
      "create(address,address,uint256,uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(stakingToken),
        ethereum.Value.fromAddress(rewardToken),
        ethereum.Value.fromUnsignedBigInt(bonusMin),
        ethereum.Value.fromUnsignedBigInt(bonusMax),
        ethereum.Value.fromUnsignedBigInt(bonusPeriod)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  count(): BigInt {
    let result = super.call("count", "count():(uint256)", []);

    return result[0].toBigInt();
  }

  try_count(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("count", "count():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get gysr_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get stakingToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rewardToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get bonusMin(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get bonusMax(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get bonusPeriod(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
