import React from 'react';
import './Skill.css';

// skill_ 이미지들 import
import frame0 from '../assets/img/Frame 1686556170.png';
import frame1 from '../assets/img/Frame 1686556171.png';
import frame2 from '../assets/img/Frame 1686556172.png';
import frame3 from '../assets/img/Frame 1686556173.png';
import frame4 from '../assets/img/Frame 1686556174.png';
import frame5 from '../assets/img/Frame 1686556175.png';
import frame6 from '../assets/img/Frame 1686556176.png';
// frame7 is excluded due to suspected empty content (143 bytes)
import frame8 from '../assets/img/Frame 1686556178.png';
import frame10 from '../assets/img/Frame 1686556180.png';

const allSkills = [
    frame0, frame1, frame2, frame3, frame4,
    frame5, frame6, frame8, frame10
];

// 배열을 랜덤으로 섞는 함수
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const row1Base = shuffleArray(allSkills);
const row2Base = shuffleArray(allSkills);

const skillsRow1 = [...row1Base, ...row1Base, ...row1Base, ...row1Base];
const skillsRow2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

const Skill = () => {
    return (
        <section className="skill-section">
            <div className="skill-wrapper">
                {/* 첫 번째 띠 (왼쪽 위 -> 오른쪽 아래 or 반대) */}
                <div className="skill-track track-1">
                    <div className="skill-content">
                        {skillsRow1.map((skill, i) => (
                            <div key={i} className="skill-icon">
                                <div className="icon-box">
                                    <img src={skill} alt="skill icon" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 두 번째 띠 (반대 방향) */}
                <div className="skill-track track-2">
                    <div className="skill-content reverse">
                        {skillsRow2.map((skill, i) => (
                            <div key={i} className="skill-icon">
                                <div className="icon-box">
                                    <img src={skill} alt="skill icon" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;