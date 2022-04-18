import  {FeatureAnimation, FeatureAnimationEvent, FeatureAnimationOptions } from './FeatureAnimation';

export interface Options extends FeatureAnimationOptions {
    side?: 'left' | 'right';
}
/** Slice animation: feature enter from left
 * @constructor
 * @extends {featureAnimation}
 * @param {featureAnimationThrowOptions} options
 *  @param {left|right} options.side side of the animation, default left
 */
export default class Throw extends FeatureAnimation {
    constructor(options?: Options)
    /** Animate
    * @param {FeatureAnimationEvent} e
     */
    animate(e: FeatureAnimationEvent): boolean;
}

