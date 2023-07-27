function isTouch(event: MouseEvent | TouchEvent): event is TouchEvent {
  return event instanceof TouchEvent;
}

function isMouse(event: MouseEvent | TouchEvent): event is MouseEvent {
  return event instanceof MouseEvent;
}

export { isTouch, isMouse };
