"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Constants and utilities for data type */
/** Data type based on level of measurement */
var Type;
(function (Type) {
    Type.QUANTITATIVE = 'quantitative';
    Type.ORDINAL = 'ordinal';
    Type.TEMPORAL = 'temporal';
    Type.NOMINAL = 'nominal';
    Type.LATITUDE = 'latitude';
    Type.LONGITUDE = 'longitude';
    Type.GEOJSON = 'geojson';
})(Type = exports.Type || (exports.Type = {}));
var TYPE_INDEX = {
    quantitative: 1,
    ordinal: 1,
    temporal: 1,
    nominal: 1,
    latitude: 1,
    longitude: 1,
    geojson: 1
};
function isType(t) {
    return !!TYPE_INDEX[t];
}
exports.isType = isType;
exports.QUANTITATIVE = Type.QUANTITATIVE;
exports.ORDINAL = Type.ORDINAL;
exports.TEMPORAL = Type.TEMPORAL;
exports.NOMINAL = Type.NOMINAL;
exports.LATITUDE = Type.LATITUDE;
exports.LONGITUDE = Type.LONGITUDE;
exports.GEOJSON = Type.GEOJSON;
/**
 * Get full, lowercase type name for a given type.
 * @param  type
 * @return Full type name.
 */
function getFullName(type) {
    if (type) {
        type = type.toLowerCase();
        switch (type) {
            case 'q':
            case exports.QUANTITATIVE:
                return 'quantitative';
            case 't':
            case exports.TEMPORAL:
                return 'temporal';
            case 'o':
            case exports.ORDINAL:
                return 'ordinal';
            case 'n':
            case exports.NOMINAL:
                return 'nominal';
            case exports.LATITUDE:
                return 'latitude';
            case exports.LONGITUDE:
                return 'longitude';
            case exports.GEOJSON:
                return 'geojson';
        }
    }
    // If we get invalid input, return undefined type.
    return undefined;
}
exports.getFullName = getFullName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQTRDO0FBQzVDLDhDQUE4QztBQUU5QyxJQUFpQixJQUFJLENBU3BCO0FBVEQsV0FBaUIsSUFBSTtJQUNOLGlCQUFZLEdBQW1CLGNBQWMsQ0FBQztJQUM5QyxZQUFPLEdBQWMsU0FBUyxDQUFDO0lBQy9CLGFBQVEsR0FBZSxVQUFVLENBQUM7SUFDbEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztJQUUvQixhQUFRLEdBQWUsVUFBVSxDQUFDO0lBQ2xDLGNBQVMsR0FBZ0IsV0FBVyxDQUFDO0lBQ3JDLFlBQU8sR0FBYyxTQUFTLENBQUM7QUFDOUMsQ0FBQyxFQVRnQixJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFTcEI7QUFNRCxJQUFNLFVBQVUsR0FBZTtJQUM3QixZQUFZLEVBQUUsQ0FBQztJQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1YsUUFBUSxFQUFFLENBQUM7SUFDWCxPQUFPLEVBQUUsQ0FBQztJQUNWLFFBQVEsRUFBRSxDQUFDO0lBQ1gsU0FBUyxFQUFFLENBQUM7SUFDWixPQUFPLEVBQUUsQ0FBQztDQUNYLENBQUM7QUFFRixnQkFBdUIsQ0FBTTtJQUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRkQsd0JBRUM7QUFFWSxRQUFBLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQ2pDLFFBQUEsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdkIsUUFBQSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN6QixRQUFBLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBRXZCLFFBQUEsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekIsUUFBQSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMzQixRQUFBLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBRXBDOzs7O0dBSUc7QUFDSCxxQkFBNEIsSUFBaUI7SUFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNULElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxvQkFBWTtnQkFDZixNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3hCLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxnQkFBUTtnQkFDWCxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3BCLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxlQUFPO2dCQUNWLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLGVBQU87Z0JBQ1YsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuQixLQUFLLGdCQUFRO2dCQUNYLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEIsS0FBSyxpQkFBUztnQkFDWixNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3JCLEtBQUssZUFBTztnQkFDVixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBQ0Qsa0RBQWtEO0lBQ2xELE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQTFCRCxrQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYWd9IGZyb20gJy4vdXRpbCc7XG4vKiogQ29uc3RhbnRzIGFuZCB1dGlsaXRpZXMgZm9yIGRhdGEgdHlwZSAqL1xuLyoqIERhdGEgdHlwZSBiYXNlZCBvbiBsZXZlbCBvZiBtZWFzdXJlbWVudCAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIFR5cGUge1xuICBleHBvcnQgY29uc3QgUVVBTlRJVEFUSVZFOiAncXVhbnRpdGF0aXZlJyA9ICdxdWFudGl0YXRpdmUnO1xuICBleHBvcnQgY29uc3QgT1JESU5BTDogJ29yZGluYWwnID0gJ29yZGluYWwnO1xuICBleHBvcnQgY29uc3QgVEVNUE9SQUw6ICd0ZW1wb3JhbCcgPSAndGVtcG9yYWwnO1xuICBleHBvcnQgY29uc3QgTk9NSU5BTDogJ25vbWluYWwnID0gJ25vbWluYWwnO1xuXG4gIGV4cG9ydCBjb25zdCBMQVRJVFVERTogJ2xhdGl0dWRlJyA9ICdsYXRpdHVkZSc7XG4gIGV4cG9ydCBjb25zdCBMT05HSVRVREU6ICdsb25naXR1ZGUnID0gJ2xvbmdpdHVkZSc7XG4gIGV4cG9ydCBjb25zdCBHRU9KU09OOiAnZ2VvanNvbicgPSAnZ2VvanNvbic7XG59XG5leHBvcnQgdHlwZSBCYXNpY1R5cGUgPSB0eXBlb2YgVHlwZS5RVUFOVElUQVRJVkUgfCB0eXBlb2YgVHlwZS5PUkRJTkFMIHwgdHlwZW9mIFR5cGUuVEVNUE9SQUwgfCB0eXBlb2YgVHlwZS5OT01JTkFMO1xuZXhwb3J0IHR5cGUgR2VvVHlwZSA9IHR5cGVvZiBUeXBlLkxBVElUVURFIHwgdHlwZW9mIFR5cGUuTE9OR0lUVURFIHwgdHlwZW9mIFR5cGUuR0VPSlNPTjtcblxuZXhwb3J0IHR5cGUgVHlwZSA9IEJhc2ljVHlwZSB8IEdlb1R5cGU7XG5cbmNvbnN0IFRZUEVfSU5ERVg6IEZsYWc8VHlwZT4gPSB7XG4gIHF1YW50aXRhdGl2ZTogMSxcbiAgb3JkaW5hbDogMSxcbiAgdGVtcG9yYWw6IDEsXG4gIG5vbWluYWw6IDEsXG4gIGxhdGl0dWRlOiAxLFxuICBsb25naXR1ZGU6IDEsXG4gIGdlb2pzb246IDFcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGUodDogYW55KTogdCBpcyBUeXBlIHtcbiAgcmV0dXJuICEhVFlQRV9JTkRFWFt0XTtcbn1cblxuZXhwb3J0IGNvbnN0IFFVQU5USVRBVElWRSA9IFR5cGUuUVVBTlRJVEFUSVZFO1xuZXhwb3J0IGNvbnN0IE9SRElOQUwgPSBUeXBlLk9SRElOQUw7XG5leHBvcnQgY29uc3QgVEVNUE9SQUwgPSBUeXBlLlRFTVBPUkFMO1xuZXhwb3J0IGNvbnN0IE5PTUlOQUwgPSBUeXBlLk5PTUlOQUw7XG5cbmV4cG9ydCBjb25zdCBMQVRJVFVERSA9IFR5cGUuTEFUSVRVREU7XG5leHBvcnQgY29uc3QgTE9OR0lUVURFID0gVHlwZS5MT05HSVRVREU7XG5leHBvcnQgY29uc3QgR0VPSlNPTiA9IFR5cGUuR0VPSlNPTjtcblxuLyoqXG4gKiBHZXQgZnVsbCwgbG93ZXJjYXNlIHR5cGUgbmFtZSBmb3IgYSBnaXZlbiB0eXBlLlxuICogQHBhcmFtICB0eXBlXG4gKiBAcmV0dXJuIEZ1bGwgdHlwZSBuYW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbE5hbWUodHlwZTogVHlwZXxzdHJpbmcpOiBUeXBlIHtcbiAgaWYgKHR5cGUpIHtcbiAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAncSc6XG4gICAgICBjYXNlIFFVQU5USVRBVElWRTpcbiAgICAgICAgcmV0dXJuICdxdWFudGl0YXRpdmUnO1xuICAgICAgY2FzZSAndCc6XG4gICAgICBjYXNlIFRFTVBPUkFMOlxuICAgICAgICByZXR1cm4gJ3RlbXBvcmFsJztcbiAgICAgIGNhc2UgJ28nOlxuICAgICAgY2FzZSBPUkRJTkFMOlxuICAgICAgICByZXR1cm4gJ29yZGluYWwnO1xuICAgICAgY2FzZSAnbic6XG4gICAgICBjYXNlIE5PTUlOQUw6XG4gICAgICAgIHJldHVybiAnbm9taW5hbCc7XG4gICAgICBjYXNlIExBVElUVURFOlxuICAgICAgICByZXR1cm4gJ2xhdGl0dWRlJztcbiAgICAgIGNhc2UgTE9OR0lUVURFOlxuICAgICAgICByZXR1cm4gJ2xvbmdpdHVkZSc7XG4gICAgICBjYXNlIEdFT0pTT046XG4gICAgICAgIHJldHVybiAnZ2VvanNvbic7XG4gICAgfVxuICB9XG4gIC8vIElmIHdlIGdldCBpbnZhbGlkIGlucHV0LCByZXR1cm4gdW5kZWZpbmVkIHR5cGUuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iXX0=