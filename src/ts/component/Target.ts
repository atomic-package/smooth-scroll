const Tween = require('@atomic-package/tween');

/**
 * SmoothScroll Target View Class
 * @public
 * @param option
 **/
let _created_scroll_target_num: number = 0;

export class Target {
  constructor(
      public id: number,
      public triggerId: number,
      public idName: string,
      public className: string,
      public coordinate: number,
      public node: any
  ) {
    this.id = this.createContentsId();
    if(this.node && this.coordinate == 0) {
      this.coordinate = this.getCoordinate(this.node);
    }
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Target {
    return new Target(
        0,
        data.triggerId ? data.triggerId : null,
        data.node && data.node.id ? data.node.id : null,
        data.node && data.node.className ? data.node.className : null,
        data.coordinate ? data.coordinate : 0,
        data.node ? data.node : null
    );
  }

  /**
   * Private Function
   **/
  private createContentsId(): number {
    return ++_created_scroll_target_num;
  }

  private getCoordinate(node) {
    let rect = node.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  }

  private fixedScroll(scrollTarget) {
    scrollTarget.scrollTop = this.coordinate;
  }

  /**
   * Public Function
   **/
  public scroll() {
    let target = navigator.userAgent.indexOf('WebKit') < 0 ? document.documentElement : document.body;

    let tween = Tween.fromData({
      start: {
        scrollTop: window.pageYOffset
      },
      end: {
        scrollTop: this.coordinate
      },
      option: {
        duration: 500,
        easing: 'easeOutCubic',
        step: (val) => {
          target.scrollTop = val.scrollTop;
        },
        complete: () => {
          tween = null;
          this.fixedScroll(target);
        }
      }
    });
  }
}

export default Target;