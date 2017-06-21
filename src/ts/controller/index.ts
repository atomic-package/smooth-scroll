/*
 * Author: Daisuke Takayama
 */
import Model from '../model/';
import View from '../component/';

/**
 * SmoothScroll Controller Class
 * @public
 * @param option
 **/
export class SmoothScroll {
    private static _instance: SmoothScroll = null;

    private model: Model;

    constructor() {
        if (SmoothScroll._instance) {
            return SmoothScroll._instance;
        } else {
            View.fetchElements((data: any) => {
                this.model = Model.fromData(data);
            });

            SmoothScroll._instance = this;
        }
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
        //this.triggerList.push(Trigger.fromData(data));
    }

    public createTargets(data: any): void {
        //this.targetList.push(Target.fromData(data));
    }

    public scroll(data: any): void {
        //number, id, class
        //
    }

    public resetSelected(data: any) {

    }
}


export default SmoothScroll;
