/*
 * Author: Daisuke Takayama
 */
const APView = require('@atomic-package/common').View;
const APModel = require('@atomic-package/common').Model;

import Trigger from './Trigger';
import Target from './Target';
/**
 * SmoothScroll View Class
 * @public
 * @param option
 **/
export class View {
  static fetchElements(callback): void {
    document.addEventListener("DOMContentLoaded", () => {
      let triggerList = APView.createFromTriggerElement(['[data-ap-scroll]'], Trigger);

      callback({
        triggerList: triggerList,
        targetList: this.createTargetView(triggerList)
      });
    });
  }

  public static createTargetView(triggerList) {
    let selectors: string[] = [],
        targetList = [],
        targetViewList = [];

    triggerList.forEach((trigger: any) => {
      if(parseInt(trigger.target, 10)) {
        trigger.setMoveCoordinate();
        targetViewList.push(trigger.createMoveCoordinate());

      } else if(trigger.target) {
        selectors.push(trigger.target);
      }
    });

    selectors = APModel.uniq(selectors);

    for (let i: number = 0; i < selectors.length; i++) {
      targetList.push(document.querySelectorAll(selectors[i]));
    }

    let createTargetList = APView.createFromTargetsElement(targetList, Target);

    createTargetList.forEach((createTarget: any) => {
      targetViewList.push(createTarget);
    });

    return targetViewList;
  }
}

export default View;
