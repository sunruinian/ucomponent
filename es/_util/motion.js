// import { CSSMotionProps } from 'rc-motion';
// import { MotionEventHandler1, MotionEndEventHandler1 } from 'rc-motion/lib/CSSMotion';
// // ================== Collapse Motion ==================
// const getCollapsedHeight: MotionEventHandler1 = () => ({ height: 0, opacity: 0 });
// const getRealHeight: MotionEventHandler1 = (node: { scrollHeight: any }) => ({
//   height: node.scrollHeight,
//   opacity: 1,
// });
// const getCurrentHeight: MotionEventHandler1 = (node: { offsetHeight: any }) => ({
//   height: node.offsetHeight,
// });
// const skipOpacityTransition: MotionEndEventHandler1 = (_: any, event: TransitionEvent) => (
// event as TransitionEvent).propertyName === 'height';
// const collapseMotion: CSSMotionProps = {
//   motionName: 'ant-motion-collapse',
//   onAppearStart: getCollapsedHeight,
//   onEnterStart: getCollapsedHeight,
//   onAppearActive: getRealHeight,
//   onEnterActive: getRealHeight,
//   onLeaveStart: getCurrentHeight,
//   onLeaveActive: getCollapsedHeight,
//   onAppearEnd: skipOpacityTransition,
//   onEnterEnd: skipOpacityTransition,
//   onLeaveEnd: skipOpacityTransition,
//   motionDeadline: 500,
// };
// export default collapseMotion;