import { ColorPicker, ColorArea, ColorSlider, ColorSwatch, Label } from '@heroui/react';
export const ColorDemo = () => {
    return (
        <ColorPicker defaultValue="#0485F7">
            <ColorPicker.Trigger>
                <ColorSwatch />
                <Label>یک رنگ انتخاب کنید</Label>
            </ColorPicker.Trigger>
            <ColorPicker.Popover>
                <ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness">
                    <ColorArea.Thumb />
                </ColorArea>
                <ColorSlider channel="hue" colorSpace="hsb">
                    <ColorSlider.Track>
                        <ColorSlider.Thumb />
                    </ColorSlider.Track>
                </ColorSlider>
            </ColorPicker.Popover>
        </ColorPicker>
    );
};