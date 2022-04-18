import { FeatureAnimation, FeatureAnimationEvent, FeatureAnimationOptions } from './FeatureAnimation';

export interface Options extends FeatureAnimationOptions {
    zoomOut?: boolean;
}

/** Zoom animation: feature zoom in (for points)
 * @constructor
 * @extends {featureAnimation}
 * @param {featureAnimationZoomOptions} options
 *  @param {bool} options.zoomOut to zoom out
 */
export default class Zoom extends FeatureAnimation {
    constructor(options?: Options);
    /** Animate
    * @param {featureAnimationEvent} e
     */
    animate(e: FeatureAnimationEvent): boolean;
}

