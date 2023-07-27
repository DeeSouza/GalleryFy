declare function isTouch(event: MouseEvent | TouchEvent): event is TouchEvent;
declare function isMouse(event: MouseEvent | TouchEvent): event is MouseEvent;
export { isTouch, isMouse };
