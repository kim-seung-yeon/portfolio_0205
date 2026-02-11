import React, { useState, useRef, useEffect } from 'react';
import './A.css';

// import papa_video from '../assets/video/papa_video.mp4';
import papa from '../assets/img/papa.png';
import force1 from '../assets/img/force1.png';
import split from '../assets/img/split.png';
import skill_figma from '../assets/img/Frame 1686556170.png';
import skill_chatgpt from '../assets/img/Frame 1686556171.png';
import skill_gemini from '../assets/img/Frame 1686556172.png';

import papa_1 from '../assets/video/papa_1.mp4';
import papa_2 from '../assets/video/papa_2.mov';
import papa_3 from '../assets/video/papa_3.mp4';
import papa_4 from '../assets/video/papa_4.mp4';
import force1_video from '../assets/video/force1.mp4';
import split_video from '../assets/video/split.mp4';

const A = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);
    const [videoIndex, setVideoIndex] = useState(0);
    const containerRef = useRef(null);

    const papaVideos = [papa_1, papa_2, papa_3, papa_4];

    useEffect(() => {
        if (selectedCard?.id === 1) {
            setVideoIndex(0);
        }
    }, [selectedCard]);

    const handleVideoEnd = () => {
        setVideoIndex((prev) => (prev + 1) % papaVideos.length);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const element = containerRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress (0 to 1) based on sticky scroll
            const totalDistance = element.offsetHeight - windowHeight;
            let progress = -rect.top / totalDistance;
            progress = Math.max(0, Math.min(1, progress));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Init

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cards = [
        {
            id: 1,
            content: papa,
            title: "K-Brand Rebranding",
            category: "WEB/MOBILE UIUX",
            desc: "브랜드 '파파레서피'의 신뢰를 공고히 하고 본연의 가치를 극대화하기 위한 리브랜딩 제안입니다.",
            overview: "가치 소비를 지향하는 미닝아웃 시대에 발맞춰, 브랜드 '파파레서피'의 신뢰를 공고히 하고 본연의 가치를 극대화하기 위한 리브랜딩을 제안합니다.",
            contribution: [
                { label: "기획", value: "80%" },
                { label: "디자인", value: "30%" },
                { label: "퍼블리싱", value: "40%" }
            ],
            process: "제품의 정보 전달력을 높이고 브랜드 스토리를 강조하는 레이아웃을 통해 고객 경험을 개선하고, 일관된 톤앤매너로 브랜드 아이덴티티를 확립하였습니다.",
            tools: [skill_figma, skill_chatgpt, skill_gemini],
            color: "#FFCC33",
            // video: papa_video,
            planUrl: "https://your-plan-url.com/papa-recipe",
            figmaUrl: "https://www.figma.com/your-papa-recipe-design"
        },
        {
            id: 2,
            content: force1,
            title: "Fandom Platform",
            category: "APP UIUX",
            desc: "Force1은 한국 F1 팬덤을 위한 몰입형 팬 경험 플랫폼으로, 팬들의 참여와 소통을 중심으로 UX를 설계했습니다.",
            overview: "Force1은 한국 F1 팬덤을 위한 몰입형 팬 경험 플랫폼으로, 팬들의 참여와 소통을 중심으로 UX를 설계했습니다. 직관적 데이터 시각화와 인터랙티브 요소를 통해 신규 팬과 매니아 모두 몰입할 수 있는 환경을 제공합니다.",
            contribution: [
                { label: "기획", value: "80%" },
                { label: "디자인", value: "30%" },
                { label: "퍼블리싱", value: "40%" }
            ],
            process: "팬들의 경험과 행동을 관찰하며, 국내 F1 팬덤의 몰입과 소통에서 공통된 불편을 발견했습니다. 팬 활동 데이터를 분석하여, 누구나 쉽게 참여하고 서로 연결될 수 있는 몰입형 인터페이스와 개인 맞춤형 경험을 설계했습니다.",
            tools: [skill_figma, skill_chatgpt, skill_gemini],
            color: "#FFCC33",
            planUrl: "https://your-plan-url.com/force1",
            figmaUrl: "https://www.figma.com/your-force1-design"
        },
        {
            id: 3,
            content: split,
            title: "Split Project",
            category: "APP UIUX",
            desc: "정산 과정의 불편과 혼란을 줄이고, 정산 과정을 명확하게 만드는 데 초점을 둔 프로젝트입니다.",
            overview: "정산 과정은 항목이 늘어날수록 금액 확인과 계산이 반복되어 부담이 커집니다. 특히 여러 품목을 함께 정산할 때, 누가 얼마나 부담해야 하는지 파악하기 어렵습니다. 정산 시 발생하는 불편과 혼란을 줄이고, 정산 과정을 명확하게 만드는 데 초점을 두었습니다.",
            contribution: [
                { label: "기획", value: "100%" },
                { label: "디자인", value: "100%" },
                { label: "퍼블리싱", value: "100%" }
            ],
            process: "개인의 작은 불편함에서 시작해 2030세대로 관찰 대상을 넓히며 공통의 문제를 발견했습니다. 타인이 느끼는 정산 피로도를 조사하고, 그 데이터를 바탕으로 개별 소비를 존중하는 합리적 정산 기능을 설계하였습니다.",
            tools: [skill_figma, skill_chatgpt, skill_gemini],
            color: "#FFCC33",
            planUrl: "https://your-plan-url.com/split",
            figmaUrl: "https://www.figma.com/your-split-design"
        }
    ];

    return (
        <div className="a-container" ref={containerRef}>


            {/* Sticky Scroll Container */}
            <div className="card-scroll-container">
                <div className="project-title">
                    <p className='subtitle'>About the</p>
                    <h2 className='title'>Project</h2>
                    <p className='title-text'>UX 기획부터 설계까지 전 과정을 수행한 프로젝트입니다.</p>
                </div>
                <div className="card-sticky-wrapper">
                    {cards.map((card, index) => {
                        // 3 cards: -1, 0, 1 from center (index 1)
                        const offset = index - 1;
                        const rotate = offset * 15 * scrollProgress;
                        const x = offset * 350 * scrollProgress;
                        const y = Math.abs(offset) * 40 * scrollProgress;
                        const scale = 0.8 + (0.2 * scrollProgress);

                        return (
                            <div
                                key={card.id}
                                className="card-wrapper"
                                style={{
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotate}deg) scale(${scale})`,
                                    zIndex: index === 1 ? 10 : 5,
                                    pointerEvents: 'auto'
                                }}
                                onClick={() => setSelectedCard(card)}
                            >
                                <div className={`card card-${index + 1}`}>
                                    <div className="card-inner">
                                        <div className="card-face card-front">
                                            <div className="card-bg-full" style={{ backgroundImage: `url(${card.content})` }}></div>
                                            <div className="card-initial-view">
                                                <h3 className="text-mask">
                                                    <span>{card.category}</span>
                                                    <span className="text-mask-title">{card.title}</span>
                                                </h3>
                                            </div>
                                            <div className="hover-btn">Click</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedCard && (
                <div className="project-modal-overlay" onClick={() => setSelectedCard(null)}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedCard(null)}>&times;</button>
                        <div className="modal-inner">
                            <div className="modal-layout">
                                <div
                                    className={`modal-left ${selectedCard.id !== 1 ? 'modal-vertical' : ''}`}
                                    style={{
                                        width: selectedCard.id === 2 ? '430px' : selectedCard.id === 3 ? '390px' : undefined
                                    }}
                                >
                                    {selectedCard.id === 1 ? (
                                        <video
                                            key={videoIndex}
                                            src={papaVideos[videoIndex]}
                                            autoPlay
                                            muted
                                            playsInline
                                            onEnded={handleVideoEnd}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                    ) : selectedCard.id === 2 ? (
                                        <video
                                            src={force1_video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                    ) : selectedCard.id === 3 ? (
                                        <video
                                            src={split_video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                    ) : (
                                        <img src={selectedCard.content} alt={selectedCard.title} />
                                    )}
                                </div>
                                <div className="modal-right">
                                    <div className="modal-text">
                                        <span className="modal-category">{selectedCard.category}</span>
                                        <h1 className="modal-title-main">{selectedCard.title}</h1>

                                        <div className="project-detail-grid">
                                            <div className="grid-item overview">
                                                <h3>OVERVIEW</h3>
                                                <p>{selectedCard.overview}</p>
                                            </div>

                                            <div className="grid-item contribution">
                                                <h3>Contribution</h3>
                                                <div className="progress-group">
                                                    {selectedCard.contribution.map((item, idx) => (
                                                        <div className="progress-item" key={idx}>
                                                            <span>{item.label}</span>
                                                            <div className="bar-bg">
                                                                <div className="bar-fill" style={{ width: item.value }}></div>
                                                            </div>
                                                            <span className="percent">{item.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid-item process">
                                                <h3>PROCESS</h3>
                                                <p>{selectedCard.process}</p>
                                            </div>

                                            <div className="grid-item tool">
                                                <h3>TOOL</h3>
                                                <div className="tool-icons">
                                                    {selectedCard.tools.map((icon, idx) => (
                                                        <div className="tool-icon" key={idx}>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="project-btns">
                                            <a
                                                href={selectedCard.planUrl}
                                                className="btn-ani"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                view plan
                                            </a>
                                            <a
                                                href={selectedCard.figmaUrl}
                                                className="btn-ani visit-figma"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                visit figma
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default A;
