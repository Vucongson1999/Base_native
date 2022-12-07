import { View, ViewStyle, FlexAlignType } from 'react-native'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

/**
 * @typedef BorderProps
 * @property {Number} [width]
 * @property {Number} [topWidth]
 * @property {Number} [bottomWidth]
 * @property {Number} [leftWidth]
 * @property {Number} [rightWidth]
 * @property {Number} [startWidth]
 * @property {Number} [endWidth]
 * 
 * @property {String} [color]
 * @property {String} [topColor]
 * @property {String} [bottomColor]
 * @property {String} [leftColor] 
 * @property {String} [rightColor] 
 * 
 * @property {Number} [radius]
 * @property {Number} [topRadius] 
 * @property {Number} [bottomRadius] 
 * @property {Number} [leftRadius] 
 * @property {Number} [rightRadius]
 * 
 * @property {'solid' | 'dotted' | 'dashed'} [style]
 */

/**
 * @typedef ShapeProps
 * @property {Number|String} [width]
 * @property {Number|String} [height]
 * @property {Number|String} [minWidth]
 * @property {Number|String} [minHeight]
 * @property {Number|String} [maxWidth]
 * @property {Number|String} [maxHeight]
 * 
 * @property {Number|String} [padding]
 * @property {Number|String} [paddingTop]
 * @property {Number|String} [paddingBottom]
 * @property {Number|String} [paddingLeft]
 * @property {Number|String} [paddingRight]
 * @property {Number|String} [paddingStart]
 * @property {Number|String} [paddingEnd]
 * @property {Number|String} [paddingVertical]
 * @property {Number|String} [paddingHorizontal]
 * 
 * @property {Number|String} [margin]
 * @property {Number|String} [marginTop]
 * @property {Number|String} [marginBottom]
 * @property {Number|String} [marginLeft]
 * @property {Number|String} [marginRight]
 * @property {Number|String} [marginStart]
 * @property {Number|String} [marginEnd]
 * @property {Number|String} [marginVertical]
 * @property {Number|String} [marginHorizontal]
 * 
 */

/**
 * @typedef PositionProps
 * @property {'absolute' | 'relative'} [type]
 * @property {Number|String} [top] 
 * @property {Number|String} [left] 
 * @property {Number|String} [right]
 * @property {Number|String} [bottom]
 */

/**
 * @typedef Props 
 * @property {*} children
 * @property {'none'|'flex'} [display]
 * @property {Number} [flex]
 * @property {'flex-start' | 'flex-end' | 'center' | 'stretch' |'space-between' | 'space-around'} [alignContent]
 * @property {FlexAlignType} [alignItems]
 * @property {'auto' | FlexAlignType} [alignSelf]
 * @property {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'} [justifyContent]
 * @property {'row' | 'column' | 'row-reverse' | 'column-reverse'} [direction]
 * @property {String} [backgroundColor]
 * @property {BorderProps} [border]
 * @property {PositionProps} [position] 
 * @property {ShapeProps} [shape]
 * @property {Number} [aspectRatio]
 * @property {LinearGradientProps} [linearGradient]
 */

/**
 * @param {Props} props
 */
export default function Box({ children, linearGradient, border, shape, position, direction, ...rest }) {

    /** @type {ViewStyle} */
    const nestedStyle = {
        // 
        borderWidth: border?.width,
        borderTopWidth: border?.topWidth,
        borderBottomWidth: border?.bottomWidth,
        borderLeftWidth: border?.leftWidth,
        borderRightWidth: border?.rightWidth,
        borderStartWidth: border?.startWidth,
        borderEndWidth: border?.endWidth,

        // 
        borderColor: border?.color,
        borderTopColor: border?.topColor,
        borderBottomColor: border?.bottomColor,
        borderLeftColor: border?.leftColor,
        borderRightColor: border?.rightColor,

        //
        borderStyle: border?.style,

        //
        flexDirection: direction,
        ...shape,
        ...position,
        ...rest
    }

    if (linearGradient) {
        return (
            <LinearGradient style={nestedStyle} {...linearGradient}>
                {children}
            </LinearGradient>
        )
    }
    return (
        <View style={nestedStyle}>
            {children}
        </View>
    )
}