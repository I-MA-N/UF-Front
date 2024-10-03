import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingSide_P(landmarks: NormalizedLandmark[]) {
    const values = {
        'سر به جلو میرود': "0",
    }
    const degrees: DegreeType[] = [];

    let isEven = true;
    if (landmarks[11].z < landmarks[12].z) isEven = false;
    
    const earLandmark = isEven ? 8 : 7;
    let earC7 = Math.abs(degreeTwoPoints(landmarks[earLandmark], landmarks[33]));
    if (!isEven) earC7 = 180 - earC7;
    if (earC7 <= 50) values["سر به جلو میرود"] = "1";

    degrees.push({
        landmarksUsed: [earLandmark, 33],
        degree: earC7,
        value: values["سر به جلو میرود"]
    })

    return {
        values,
        degrees
    };
}

export default WalkingSide_P;