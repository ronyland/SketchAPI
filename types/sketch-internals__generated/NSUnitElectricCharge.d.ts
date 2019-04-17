interface NSUnitElectricChargeUninitialized<InitializedType = NSUnitElectricCharge> extends NSDimensionUninitialized<NSUnitElectricCharge> {}

interface NSUnitElectricCharge extends NSDimension, INSSecureCoding {
}

declare const NSUnitElectricCharge: {
  alloc(): NSUnitElectricChargeUninitialized;
  class(): NSUnitElectricCharge;
  baseUnit(): NSUnitElectricCharge;
  coulombs(): NSUnitElectricCharge;
  megaampereHours(): NSUnitElectricCharge;
  kiloampereHours(): NSUnitElectricCharge;
  ampereHours(): NSUnitElectricCharge;
  milliampereHours(): NSUnitElectricCharge;
  microampereHours(): NSUnitElectricCharge;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}
