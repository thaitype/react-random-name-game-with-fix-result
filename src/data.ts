import { getRandomColor } from "./color";
import { faker } from "@faker-js/faker";

export interface RandomName {
  name: string;
  selected: boolean;
  color: string;
}

const selectedName: string[] = [
  "กวาง",
  "อ๊อฟ",
  "วัน",
  "ปุ้ย อุดร",
  "น้องเมย์ หาดใหญ่",
  "มี่มี่อัซมีซา นราธิวาส",
  "พี่จำลอง",
  "พี่ผ่อง",
];
export const names: RandomName[] = selectedName.map((name) => ({
  name,
  selected: true,
  color: getRandomColor(),
}));
// names.push(
//   ...faker.helpers.multiple(createName, {
//     count: 20,
//   })
// )

export function createName(name?: string): RandomName {
  return {
    name: name ?? faker.person.firstName(),
    selected: false,
    color: getRandomColor(),
  };
}

names.push(
  ...[
    "พี่อ๊อด",
    "พี่ก้อย",
    "พี่เจี๊ยบ",
    "พี่มนูญ",
    "พี่จอร์จ",
    "พี่เสาร์",
    "น้องจูน",
    "พี่พุ่ม",
    "พี่โดม",
    "น้องบี",
    "น้องจอย",
    "พี่ทิพย์",
    "พี่ปอนด์",
    "น้องเพชร",
    "เอ๋",
    "พี่แหม่ม",
    "พี่นา",
    "พี่เอ็ม",
    "พี่เอ็ก",
    "ครูนา",
    "พี่ยา",
    "พี่ตุ๊กติ๊ก",
    "แอนกนิช",
    "จอย",
    "พี่สุ",
    "พี่หนึ่ง",
    "พี่บาส",
    "น้องเต้",
    "น้องเขต",
    "อรวรรณ",
    "พี่พิช",
    "เฟท",
    "ครูดา",
    "ซาฮีดา",
    "จูน",
    "ตั้๊ก",
    "ปัทมา",
    "ติ๋ม พัชรา",
    "เนียร์",
    "โอ๊ต",
    "โดม",
    "กฤษณ์",
    "อ๊อฟ (กฤษณ์)",
    "พี่มนูญ",
    "ปุ้ย",
    "มาโนช",
    "เจี๊ยบ วาสนา",
    "กฤษดา",
    "เตียง",
    "ขรรค์ไชย",
    "ก้อย",
    "พี่หนึ่ง",
    "ทิพย์",
    "ฟิล์ม",
    "ต้น",
    "เอก (ติ๋ม)",
  ].map(createName)
);

export const selectedIndexes = names
  .filter((name) => name.selected)
  .map((_name, index) => index);
