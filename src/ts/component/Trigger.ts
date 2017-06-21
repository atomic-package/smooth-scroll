import Target from './Target';

/**
 * SmoothScroll Trigger View Class
 * @public
 * @param option
 **/
let _created_scroll_trigger_num: number = 0;

export class Trigger {
  private clickCallBackFunction: Function = () => {};

  constructor(
      public id: number,
      public className: string,
      public idName: string,
      public target: any,
      public coordinate: number,
      public moveCoordinate: number,
      public node: any
  ) {
    this.id = this.createTriggerId();
    this.coordinate = this.getCoordinate(this.node);

    this.setEventListener();
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Trigger {
    return new Trigger(
        0,
        data.className ? data.className : null,
        data.id ? data.id : null,
        data.dataset.apScroll ? data.dataset.apScroll : null,
        0,
        0,
        data ? data : null
    );
  }

  /**
   * Private Function
   **/
  private createTriggerId(): number {
    return ++_created_scroll_trigger_num;
  }

  private getCoordinate(node) {
    let rect = node.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  }

  private setEventListener(): void {
    this.node.addEventListener('click', (event) => {
      event.preventDefault();

      this.click(this.clickCallBackFunction);
    }, false);
  }

  /**
   * Public Function
   **/
  public click(fn?, isFirst?): void {
    this.clickCallBackFunction = fn;

    if(!isFirst) {
      fn(this);
    }
  }

  public setMoveCoordinate(): void {
    this.moveCoordinate = parseInt(this.target, 10);
    this.target = null;
  }

  public createMoveCoordinate(): Target {
    return Target.fromData({
      triggerId: this.id,
      coordinate: this.coordinate + this.moveCoordinate
    });
  }
}
export default Trigger;