interface BCTableViewCellButtonCellUninitialized<InitializedType = BCTableViewCellButtonCell> extends NSButtonCellUninitialized<BCTableViewCellButtonCell> {}

interface BCTableViewCellButtonCell extends NSButtonCell {
}

declare const BCTableViewCellButtonCell: {
  alloc(): BCTableViewCellButtonCellUninitialized;
  class(): BCTableViewCellButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}
