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

export class GysrSpent extends ethereum.Event {
  get params(): GysrSpent__Params {
    return new GysrSpent__Params(this);
  }
}

export class GysrSpent__Params {
  _event: GysrSpent;

  constructor(event: GysrSpent) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class GysrWithdrawn extends ethereum.Event {
  get params(): GysrWithdrawn__Params {
    return new GysrWithdrawn__Params(this);
  }
}

export class GysrWithdrawn__Params {
  _event: GysrWithdrawn;

  constructor(event: GysrWithdrawn) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RewardsDistributed extends ethereum.Event {
  get params(): RewardsDistributed__Params {
    return new RewardsDistributed__Params(this);
  }
}

export class RewardsDistributed__Params {
  _event: RewardsDistributed;

  constructor(event: RewardsDistributed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RewardsExpired extends ethereum.Event {
  get params(): RewardsExpired__Params {
    return new RewardsExpired__Params(this);
  }
}

export class RewardsExpired__Params {
  _event: RewardsExpired;

  constructor(event: RewardsExpired) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get duration(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get start(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RewardsFunded extends ethereum.Event {
  get params(): RewardsFunded__Params {
    return new RewardsFunded__Params(this);
  }
}

export class RewardsFunded__Params {
  _event: RewardsFunded;

  constructor(event: RewardsFunded) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get duration(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get start(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get total(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RewardsUnlocked extends ethereum.Event {
  get params(): RewardsUnlocked__Params {
    return new RewardsUnlocked__Params(this);
  }
}

export class RewardsUnlocked__Params {
  _event: RewardsUnlocked;

  constructor(event: RewardsUnlocked) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get total(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Staked extends ethereum.Event {
  get params(): Staked__Params {
    return new Staked__Params(this);
  }
}

export class Staked__Params {
  _event: Staked;

  constructor(event: Staked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get total(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class Unstaked extends ethereum.Event {
  get params(): Unstaked__Params {
    return new Unstaked__Params(this);
  }
}

export class Unstaked__Params {
  _event: Unstaked;

  constructor(event: Unstaked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get total(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class Geyser__fundingsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class Geyser__userStakesResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Geyser__userTotalsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Geyser__previewResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Geyser__preview1Result {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Geyser extends ethereum.SmartContract {
  static bind(address: Address): Geyser {
    return new Geyser("Geyser", address);
  }

  BONUS_DECIMALS(): BigInt {
    let result = super.call("BONUS_DECIMALS", "BONUS_DECIMALS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_BONUS_DECIMALS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BONUS_DECIMALS",
      "BONUS_DECIMALS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  INITIAL_SHARES_PER_TOKEN(): BigInt {
    let result = super.call(
      "INITIAL_SHARES_PER_TOKEN",
      "INITIAL_SHARES_PER_TOKEN():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_INITIAL_SHARES_PER_TOKEN(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "INITIAL_SHARES_PER_TOKEN",
      "INITIAL_SHARES_PER_TOKEN():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_ACTIVE_FUNDINGS(): BigInt {
    let result = super.call(
      "MAX_ACTIVE_FUNDINGS",
      "MAX_ACTIVE_FUNDINGS():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_ACTIVE_FUNDINGS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_ACTIVE_FUNDINGS",
      "MAX_ACTIVE_FUNDINGS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bonusMax(): BigInt {
    let result = super.call("bonusMax", "bonusMax():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bonusMax(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("bonusMax", "bonusMax():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bonusMin(): BigInt {
    let result = super.call("bonusMin", "bonusMin():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bonusMin(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("bonusMin", "bonusMin():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bonusPeriod(): BigInt {
    let result = super.call("bonusPeriod", "bonusPeriod():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bonusPeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("bonusPeriod", "bonusPeriod():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fundings(param0: BigInt): Geyser__fundingsResult {
    let result = super.call(
      "fundings",
      "fundings(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Geyser__fundingsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_fundings(param0: BigInt): ethereum.CallResult<Geyser__fundingsResult> {
    let result = super.tryCall(
      "fundings",
      "fundings(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Geyser__fundingsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
  }

  lastUpdated(): BigInt {
    let result = super.call("lastUpdated", "lastUpdated():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastUpdated(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastUpdated", "lastUpdated():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsHistory(): boolean {
    let result = super.call("supportsHistory", "supportsHistory():(bool)", []);

    return result[0].toBoolean();
  }

  try_supportsHistory(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsHistory",
      "supportsHistory():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalGysrRewards(): BigInt {
    let result = super.call(
      "totalGysrRewards",
      "totalGysrRewards():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalGysrRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalGysrRewards",
      "totalGysrRewards():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalLockedShares(): BigInt {
    let result = super.call(
      "totalLockedShares",
      "totalLockedShares():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalLockedShares(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalLockedShares",
      "totalLockedShares():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalRewards(): BigInt {
    let result = super.call("totalRewards", "totalRewards():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalRewards", "totalRewards():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalStakingShareSeconds(): BigInt {
    let result = super.call(
      "totalStakingShareSeconds",
      "totalStakingShareSeconds():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalStakingShareSeconds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalStakingShareSeconds",
      "totalStakingShareSeconds():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalStakingShares(): BigInt {
    let result = super.call(
      "totalStakingShares",
      "totalStakingShares():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalStakingShares(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalStakingShares",
      "totalStakingShares():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userStakes(param0: Address, param1: BigInt): Geyser__userStakesResult {
    let result = super.call(
      "userStakes",
      "userStakes(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Geyser__userStakesResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_userStakes(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Geyser__userStakesResult> {
    let result = super.tryCall(
      "userStakes",
      "userStakes(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Geyser__userStakesResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  userTotals(param0: Address): Geyser__userTotalsResult {
    let result = super.call(
      "userTotals",
      "userTotals(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Geyser__userTotalsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_userTotals(
    param0: Address
  ): ethereum.CallResult<Geyser__userTotalsResult> {
    let result = super.tryCall(
      "userTotals",
      "userTotals(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Geyser__userTotalsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  totalStakedFor(addr: Address): BigInt {
    let result = super.call(
      "totalStakedFor",
      "totalStakedFor(address):(uint256)",
      [ethereum.Value.fromAddress(addr)]
    );

    return result[0].toBigInt();
  }

  try_totalStakedFor(addr: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalStakedFor",
      "totalStakedFor(address):(uint256)",
      [ethereum.Value.fromAddress(addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalStaked(): BigInt {
    let result = super.call("totalStaked", "totalStaked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalStaked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalStaked", "totalStaked():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakingToken(): Address {
    let result = super.call("stakingToken", "stakingToken():(address)", []);

    return result[0].toAddress();
  }

  try_stakingToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("stakingToken", "stakingToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardToken(): Address {
    let result = super.call("rewardToken", "rewardToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardToken", "rewardToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timeBonus(time: BigInt): BigInt {
    let result = super.call("timeBonus", "timeBonus(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(time)
    ]);

    return result[0].toBigInt();
  }

  try_timeBonus(time: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("timeBonus", "timeBonus(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(time)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gysrBonus(gysr: BigInt): BigInt {
    let result = super.call("gysrBonus", "gysrBonus(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(gysr)
    ]);

    return result[0].toBigInt();
  }

  try_gysrBonus(gysr: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("gysrBonus", "gysrBonus(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(gysr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ratio(): BigInt {
    let result = super.call("ratio", "ratio():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ratio(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ratio", "ratio():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalLocked(): BigInt {
    let result = super.call("totalLocked", "totalLocked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalLocked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalLocked", "totalLocked():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalUnlocked(): BigInt {
    let result = super.call("totalUnlocked", "totalUnlocked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalUnlocked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalUnlocked",
      "totalUnlocked():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fundingCount(): BigInt {
    let result = super.call("fundingCount", "fundingCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fundingCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fundingCount", "fundingCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stakeCount(addr: Address): BigInt {
    let result = super.call("stakeCount", "stakeCount(address):(uint256)", [
      ethereum.Value.fromAddress(addr)
    ]);

    return result[0].toBigInt();
  }

  try_stakeCount(addr: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("stakeCount", "stakeCount(address):(uint256)", [
      ethereum.Value.fromAddress(addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  preview(addr: Address, amount: BigInt, gysr: BigInt): Geyser__previewResult {
    let result = super.call(
      "preview",
      "preview(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(addr),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(gysr)
      ]
    );

    return new Geyser__previewResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_preview(
    addr: Address,
    amount: BigInt,
    gysr: BigInt
  ): ethereum.CallResult<Geyser__previewResult> {
    let result = super.tryCall(
      "preview",
      "preview(address,uint256,uint256):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(addr),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(gysr)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Geyser__previewResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  preview1(): Geyser__preview1Result {
    let result = super.call(
      "preview",
      "preview():(uint256,uint256,uint256,uint256)",
      []
    );

    return new Geyser__preview1Result(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_preview1(): ethereum.CallResult<Geyser__preview1Result> {
    let result = super.tryCall(
      "preview",
      "preview():(uint256,uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Geyser__preview1Result(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
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

  get stakingToken_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rewardToken_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get bonusMin_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get bonusMax_(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get bonusPeriod_(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get gysr_(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get value1(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class StakeForCall extends ethereum.Call {
  get inputs(): StakeForCall__Inputs {
    return new StakeForCall__Inputs(this);
  }

  get outputs(): StakeForCall__Outputs {
    return new StakeForCall__Outputs(this);
  }
}

export class StakeForCall__Inputs {
  _call: StakeForCall;

  constructor(call: StakeForCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class StakeForCall__Outputs {
  _call: StakeForCall;

  constructor(call: StakeForCall) {
    this._call = call;
  }
}

export class FundCall extends ethereum.Call {
  get inputs(): FundCall__Inputs {
    return new FundCall__Inputs(this);
  }

  get outputs(): FundCall__Outputs {
    return new FundCall__Outputs(this);
  }
}

export class FundCall__Inputs {
  _call: FundCall;

  constructor(call: FundCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get duration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FundCall__Outputs {
  _call: FundCall;

  constructor(call: FundCall) {
    this._call = call;
  }
}

export class Fund1Call extends ethereum.Call {
  get inputs(): Fund1Call__Inputs {
    return new Fund1Call__Inputs(this);
  }

  get outputs(): Fund1Call__Outputs {
    return new Fund1Call__Outputs(this);
  }
}

export class Fund1Call__Inputs {
  _call: Fund1Call;

  constructor(call: Fund1Call) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get duration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get start(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class Fund1Call__Outputs {
  _call: Fund1Call;

  constructor(call: Fund1Call) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class UnstakeCall extends ethereum.Call {
  get inputs(): UnstakeCall__Inputs {
    return new UnstakeCall__Inputs(this);
  }

  get outputs(): UnstakeCall__Outputs {
    return new UnstakeCall__Outputs(this);
  }
}

export class UnstakeCall__Inputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get gysr(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UnstakeCall__Outputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}

export class Unstake1Call extends ethereum.Call {
  get inputs(): Unstake1Call__Inputs {
    return new Unstake1Call__Inputs(this);
  }

  get outputs(): Unstake1Call__Outputs {
    return new Unstake1Call__Outputs(this);
  }
}

export class Unstake1Call__Inputs {
  _call: Unstake1Call;

  constructor(call: Unstake1Call) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get value1(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class Unstake1Call__Outputs {
  _call: Unstake1Call;

  constructor(call: Unstake1Call) {
    this._call = call;
  }
}

export class UpdateCall extends ethereum.Call {
  get inputs(): UpdateCall__Inputs {
    return new UpdateCall__Inputs(this);
  }

  get outputs(): UpdateCall__Outputs {
    return new UpdateCall__Outputs(this);
  }
}

export class UpdateCall__Inputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }
}

export class UpdateCall__Outputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }
}

export class CleanCall extends ethereum.Call {
  get inputs(): CleanCall__Inputs {
    return new CleanCall__Inputs(this);
  }

  get outputs(): CleanCall__Outputs {
    return new CleanCall__Outputs(this);
  }
}

export class CleanCall__Inputs {
  _call: CleanCall;

  constructor(call: CleanCall) {
    this._call = call;
  }
}

export class CleanCall__Outputs {
  _call: CleanCall;

  constructor(call: CleanCall) {
    this._call = call;
  }
}
