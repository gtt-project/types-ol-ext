import {FeatureAnimation, FeatureAnimationEvent, FeatureAnimationOptions } from './FeatureAnimation';

export interface Options extends FeatureAnimationOptions {
    bounce?: number;
    amplitude?: number;
    horizontal?: boolean;
}
/** Shakee animation:
 * @constructor
 * @extends {featureAnimation}
 * @param {featureAnimationShakeOptions} options
 *	@param {number} options.bounce number o bounds, default 6
 *	@param {number} options.amplitude amplitude of the animation, default 40
 *	@param {bool} options.horizontal shake horizontally default false (vertical)
 */
export default class Shake extends FeatureAnimation {
    constructor(options?: Options)
    /** Animate
    * @param {featureAnimationEvent} e
     */
    animate(e: FeatureAnimationEvent): boolean;
}

