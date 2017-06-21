/*
 * Author: Daisuke Takayama
 */
const APModel = require('@atomic-package/common').Model;

// store
import {
  Target,
  Trigger
} from '../store/';

/**
 * SmoothScroll Model Class
 * @public
 * @param option
 **/
export class Model {
  constructor(
      public targetList: Target[],
      public triggerList: Trigger[]
  ) {
    this.setTriggerCallBack();
    this.setTriggerTargetId();
  }

  /**
   * Static Function
   **/
  public static fromData(data: any): Model {
    return new Model(
        data.targetList ? APModel.createTargetModel(data.targetList, Target) : [],
        data.triggerList ? APModel.createTriggerModel(data.triggerList, Trigger) : []
    );
  }

  /**
   * Private Function
   **/
  private setTriggerTargetId() {
    for(let i: number = 0; i < this.triggerList.length; i++) {
      this.triggerList[i].setTargetId(this.targetList);
    }
  }

  private setTriggerCallBack(): void {
    this.triggerList.forEach((trigger: Trigger) => {
      trigger.view.click((triggerView) => {
        this.triggerClick(trigger);
      }, true);
    });
  }

  private triggerClick(trigger: Trigger): void {
    for(let i: number = 0; i < this.targetList.length; i++) {
      this.targetList[i].scroll(trigger);
    }
  }
}

export default Model;
