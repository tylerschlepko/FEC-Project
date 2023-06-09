import { useContext } from 'react'
import HostContext from '../../Context/HostContext';
import './RentalAmenitiesModal.css'

export default function RentalAmenitiesModal() {

    const { showAllAmenities, closeAmenities, amenities, rulesData, safetyData } = useContext(HostContext)

    return (
        <>
            {showAllAmenities && (
                <div className="amenities-modal-overlay">
                    <div className="amenities-modal-container">
                        <div className="amenities-modal">
                            <div className="amenities-close-btn" onClick={closeAmenities}>
                                <button>
                                <svg viewBox='0 0 32 32'>  
                                        <path d="m6 6 20 20"></path>
                                        <path d="m26 6-20 20"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className='overall-amen-content'>
                                <div className="modal-header">
                                    <h3>What this place offers</h3>
                                </div>
                                <div className="amen-categories">
                                    Scenic views
                                </div>
                                    {amenities.valley_view ? (<div className="amen-modal-content">
                                    <div className="amen-modal-group">
                                            <svg viewBox="0 0 32 32">
                                                <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                                                </path>
                                            </svg>
                                            <div className="amen-modal-name">
                                                Valley view
                                            </div>
                                    </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    {amenities.mountain_view ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                            <svg viewBox="0 0 32 32">
                                                <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                                                </path>
                                            </svg>
                                            <div className="amen-modal-name">
                                                Mountain view
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Bathroom
                                </div>
                                    {amenities.bathtub ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M7.5 2a4.5 4.5 0 0 1 4.473 4H14v2H8V6h1.95a2.5 2.5 0 0 0-4.945.336L5 6.5V16h26v2h-2v5a5.001 5.001 0 0 1-3 4.584V30h-2v-2H8v2H6v-2.416a5.002 5.002 0 0 1-2.995-4.349L3 23v-5H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zm19.499 16h-22L5 23a3 3 0 0 0 2.65 2.98l.174.015L8 26h16a3 3 0 0 0 2.995-2.824L27 23z"></path></svg>
                                            <div className="amen-modal-name">
                                                Bathtub
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.hair_dryer ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                                            <div className="amen-modal-name">
                                                Hair dryer
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.shampoo ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M20 1v2h-3v2h1a2 2 0 0 1 1.995 1.85L20 7v2a4 4 0 0 1 3.995 3.8L24 13v14a4 4 0 0 1-3.8 3.995L20 31h-8a4 4 0 0 1-3.995-3.8L8 27V13a4 4 0 0 1 3.8-3.995L12 9V7a2 2 0 0 1 1.85-1.995L14 5h1V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 1.995L12 29h8a2 2 0 0 0 1.995-1.85L22 27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-1.995 1.85L10 13v1h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z"></path></svg>
                                            <div className="amen-modal-name">
                                                Shampoo
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.hot_water ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M16 32c6.627 0 12-5.373 12-12 0-6.218-3.671-12.51-10.924-18.889L16 .18l-1.076.932C7.671 7.491 4 13.782 4 20c0 6.577 5.397 12 12 12zm0-2c-5.496 0-10-4.525-10-10 0-5.327 3.115-10.882 9.424-16.65l.407-.37.169-.149.576.518c6.043 5.526 9.156 10.855 9.407 15.977l.013.34L26 20c0 5.523-4.477 10-10 10zm-3.452-5.092a8.954 8.954 0 0 1 2.127-4.932l.232-.26.445-.462a6.973 6.973 0 0 0 1.827-4.416l.007-.306-.006-.307-.007-.11a6.03 6.03 0 0 0-2.009-.057 4.979 4.979 0 0 1-1.443 4.008 10.951 10.951 0 0 0-2.87 5.016 6.034 6.034 0 0 0 1.697 1.826zM16 26l.253-.005.25-.016-.003-.137c0-1.32.512-2.582 1.464-3.533a10.981 10.981 0 0 0 3.017-5.656 6.026 6.026 0 0 0-1.803-1.743 8.971 8.971 0 0 1-2.172 5.493l-.228.255-.444.462a6.96 6.96 0 0 0-1.827 4.415l-.006.276c.48.123.982.189 1.499.189z"></path></svg>
                                            <div className="amen-modal-name">
                                                Hot water
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Bedroom and Laundry
                                </div>
                                    { amenities.free_washer ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                            <svg viewBox="0 0 32 32"><path d="m26.2875958 2c1.4943151.00218728 2.7591731 1.1037772 2.9663548 2.58389031.4975641 3.56108628.7460494 7.36641109.7460494 11.41610969s-.2484853 7.8550234-.7460839 11.4163568c-.1988613 1.4206714-1.3725089 2.4927235-2.7894512 2.5781497l-.1783321.0054935h-20.57372863c-1.49431506-.0021873-2.7591731-1.1037772-2.96635481-2.5838903-.49756403-3.5610863-.74604936-7.3664111-.74604936-11.4161097s.24848533-7.85502341.74608392-11.41635683c.19886126-1.42067133 1.37250888-2.49272345 2.78945123-2.57814972l.17833204-.00549345zm-.001463 1.99999893h-20.57080259c-.49804876.00072866-.919536.36781024-.98852197.86064804-.48434104 3.46644876-.72680824 7.17961153-.72680824 11.13935193 0 3.9597426.2424672 7.6729054.72677368 11.139107.06371126.4551553.42774918.8029468.87395616.8543314l.11313735.0065616h20.57080261c.4980488-.0007265.919536-.3678081.988522-.8606459.484341-3.4664487.7268082-7.1796115.7268082-11.1393541 0-3.9597404-.2424672-7.67290317-.7267737-11.13910479-.0690205-.49308494-.4905077-.86016652-.9870935-.86089518zm-10.2861328 3.00000107c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9-9-4.0294373-9-9 4.0294373-9 9-9zm-5.8414878 7.4999981c-.34108957-.0001654-.67972606.0242467-1.01356612.0725599-.09481995.4612974-.14494608.9385159-.14494608 1.4274401 0 3.8659951 3.1340068 7 7 7 2.7319686 0 5.0983993-1.5650514 6.2516347-3.8475004-.2599201.0223771-.5214932.0336332-.7841237.0335052-2.2620527-.0011072-4.4437323-.8444711-6.1250979-2.4078908l-.2367463-.2282308c-1.3302626-1.3311149-3.1018689-2.0498832-4.9471546-2.0498832zm5.8414878-5.4999981c-2.5924559 0-4.8557544 1.4092904-6.06558041 3.5035562l.22458041-.0035562c2.2624645 0 4.4444831.8435532 6.1243595 2.4073778l.2365208.22829c1.3314314 1.3305789 3.1034818 2.049432 4.9486075 2.0503351.4925113.0002394.9799732-.0508503 1.4553384-.1512223.0503426-.3388527.0761738-.6838001.0761738-1.0347806 0-3.8659932-3.1340068-7-7-7zm-9-3c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1z"></path></svg>
                                            <div className="amen-modal-name">
                                                Free washer - In unit
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.free_dryer ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                            <svg viewBox="0 0 32 32"><path d="m26.2875958 2c1.4943151.00218728 2.7591731 1.1037772 2.9663548 2.58389031.4975641 3.56108628.7460494 7.36641109.7460494 11.41610969s-.2484853 7.8550234-.7460839 11.4163568c-.1988613 1.4206714-1.3725089 2.4927235-2.7894512 2.5781497l-.1783321.0054935h-20.57372863c-1.49431506-.0021873-2.7591731-1.1037772-2.96635481-2.5838903-.49756403-3.5610863-.74604936-7.3664111-.74604936-11.4161097s.24848533-7.85502341.74608392-11.41635683c.19886126-1.42067133 1.37250888-2.49272345 2.78945123-2.57814972l.17833204-.00549345zm-.001463 1.99999893h-20.57080259c-.49804876.00072866-.919536.36781024-.98852197.86064804-.48434104 3.46644876-.72680824 7.17961153-.72680824 11.13935193 0 3.9597426.2424672 7.6729054.72677368 11.139107.06371126.4551553.42774918.8029468.87395616.8543314l.11313735.0065616h20.57080261c.4980488-.0007265.919536-.3678081.988522-.8606459.484341-3.4664487.7268082-7.1796115.7268082-11.1393541 0-3.9597404-.2424672-7.67290317-.7267737-11.13910479-.0637112-.45515533-.4277492-.80294685-.8739561-.85433312zm-10.2861328 3.00000107c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9-9-4.0294373-9-9 4.0294373-9 9-9zm0 2c-3.8659932 0-7 3.1340068-7 7s3.1340068 7 7 7 7-3.1340068 7-7-3.1340068-7-7-7zm-4.7951346 5.5788106c1.3597551.2032355 2.6368491.8036363 3.6750675 1.7549063l.4624802.4443952c1.3026453 1.2112662 2.9056013 1.990323 4.6135777 2.2803419-.5217984.6740368-1.2132426 1.2118231-2.0102649 1.5488326-1.57815-.5325014-3.0356786-1.4253778-4.2547254-2.6436447-.7379136-.7383863-1.6623492-1.2119187-2.6564208-1.3872052-.0233335-.1876103-.0345797-.3807102-.0345797-.5764367 0-.4937113.071557-.9707096.2048654-1.4211894zm3.0802908-3.2769928c1.3461758.5441062 2.5883533 1.3583726 3.6484848 2.4191837.8218211.8212949 1.8740777 1.3152275 2.9951909 1.4359211.0468951.2736529.0711681.5555305.0711681.8430774 0 .3991428-.0467695.787362-.1351271 1.1594763-1.5240964-.1309275-2.9679331-.7542169-4.1190706-1.8077277l-.4624428-.4443708c-1.1628727-1.0825373-2.5663679-1.8199267-4.0706028-2.1712732.5507846-.6396449 1.262657-1.1386519 2.0723995-1.4342868zm-7.2851562-5.3018178c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1z"></path></svg>
                                            <div className="amen-modal-name">
                                                Free dryer - In unit
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.essentials ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M11 1v7l1.898 20.819.007.174c-.025 1.069-.804 1.907-1.818 1.999a2 2 0 0 1-.181.008h-7.81l-.174-.008C1.86 30.87 1.096 30.018 1.096 29l.002-.09 1.907-21L3.001 1zm6 0l.15.005a2 2 0 0 1 1.844 1.838L19 3v7.123l-2 8V31h-2V18.123l.007-.163.02-.162.033-.16L16.719 11H13V1zm11 0a2 2 0 0 1 1.995 1.85L30 3v26a2 2 0 0 1-1.85 1.995L28 31h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7V9h7V7h-7V5h7V3h-7V1zM9.088 9h-4.18L3.096 29l.058.002L10.906 29l-.004-.058zM17 3h-2v6h2zM9.002 3H5L5 7h4.004z"></path></svg>
                                            <div className="amen-modal-name">
                                                Essentials
                                                <div className="amen-modal-name-sub">
                                                    {amenities.essentials_items}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.hangers ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M16 2a5 5 0 0 1 1.661 9.717 1.002 1.002 0 0 0-.653.816l-.008.126v.813l13.23 9.052a3 3 0 0 1 1.299 2.279l.006.197a3 3 0 0 1-3 3H3.465a3 3 0 0 1-1.694-5.476L15 13.472v-.813c0-1.211.724-2.285 1.816-2.757l.176-.07a3 3 0 1 0-3.987-3.008L13 7h-2a5 5 0 0 1 5-5zm0 13.211L2.9 24.175A1 1 0 0 0 3.465 26h25.07a1 1 0 0 0 .565-1.825z"></path></svg>
                                            <div className="amen-modal-name">
                                                Hangers
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.bed_linens ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M19.586 2a2 2 0 0 1 1.284.467l.13.119L29.414 11a2 2 0 0 1 .578 1.238l.008.176V25a5 5 0 0 1-4.783 4.995L25 30H4a2 2 0 0 1-1.995-1.85L2 28V7a5 5 0 0 1 4.783-4.995L7 2zM7 4a3 3 0 0 0-2.995 2.824L4 7v14a3 3 0 0 0 2.824 2.995L7 24h19v2H7a4.978 4.978 0 0 1-3-1v3h21a3 3 0 0 0 2.995-2.824L28 25v-3H6v-2h22v-6h-5a5 5 0 0 1-4.995-4.783L18 9V4zm20.586 8L20 4.415V9a3 3 0 0 0 2.824 2.995L23 12z"></path></svg>
                                            <div className="amen-modal-name">
                                                Bed linens
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.extra_pillows_and_blankets ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M26.805 4.006a2.995 2.995 0 0 0-1.873.82l-.022.022-.113-.021a47.19 47.19 0 0 0-16.86-.132l-.848.153-.021-.022A3 3 0 0 0 2 7l.007.211c.04.56.234 1.09.554 1.536l.025.033-.044.278c-.718 4.722-.717 9.14.001 13.88l.044.279-.025.035A3 3 0 0 0 5 28l.195-.006a2.995 2.995 0 0 0 1.873-.82l.021-.023.114.022a47.19 47.19 0 0 0 16.86.132l.847-.154.022.023A3 3 0 0 0 30 25l-.007-.212a2.992 2.992 0 0 0-.554-1.536l-.027-.034.045-.28c.718-4.74.719-9.158 0-13.88l-.044-.278.026-.033A3 3 0 0 0 27 4l-.194.006zM27 6a1 1 0 0 1 .676 1.737l-.4.367.09.534c.84 5.04.84 9.662-.001 14.723l-.09.534.4.367a1 1 0 1 1-1.525 1.266l-.367-.59-.68.138a45.287 45.287 0 0 1-18.205 0l-.68-.138-.368.59a1 1 0 1 1-1.525-1.265l.4-.367-.09-.535c-.841-5.06-.842-9.683 0-14.723l.088-.534-.399-.367A1 1 0 1 1 5.85 6.473l.367.59.68-.139a45.287 45.287 0 0 1 18.205 0l.68.138.368-.59A.998.998 0 0 1 27 6z"></path></svg>
                                            <div className="amen-modal-name">
                                                Extra pillows and blankets
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null} 
                                    { amenities.iron ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.027 3l.308.004a12.493 12.493 0 0 1 11.817 9.48l.07.3 1.73 7.782.027.144a2 2 0 0 1-1.83 2.285L28 23H2.247l-.15-.005a2 2 0 0 1-1.844-1.838L.247 21v-7l.004-.217a5 5 0 0 1 4.773-4.778L5.247 9h9V5h-14V3zm11.528 16H2.245l.002 2H28zM16.247 5.002V11h-11l-.177.005a3 3 0 0 0-2.818 2.819L2.247 14l-.001 3H27.11l-.84-3.783-.067-.28a10.494 10.494 0 0 0-9.596-7.921l-.292-.012z"></path></svg>
                                            <div className="amen-modal-name">
                                                Iron
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Entertainment
                                </div>
                                    { amenities.tv ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg>
                                            <div className="amen-modal-name">
                                                {amenities.tv_apps}
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.game_console ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M30 2v2h-8a5 5 0 0 0-4.995 4.783L17 9v5h9a4 4 0 0 1 3.995 3.8L30 18v8a4 4 0 0 1-3.8 3.995L26 30H6a4 4 0 0 1-3.995-3.8L2 26v-8a4 4 0 0 1 3.8-3.995L6 14h9V9a7 7 0 0 1 6.76-6.996L22 2h8zm-4 14H6a2 2 0 0 0-1.995 1.85L4 18v8a2 2 0 0 0 1.85 1.995L6 28h20a2 2 0 0 0 1.995-1.85L28 26v-8a2 2 0 0 0-1.85-1.995L26 16zm-15 3v2h2v2h-2v2H9v-2H7v-2h2v-2h2zm13 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Game console
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Heating and cooling
                                </div>
                                    { amenities.ac_unit ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path></svg>
                                            <div className="amen-modal-name">
                                                Window AC unit
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.ac_unit ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path></svg>
                                            <div className="amen-modal-name">
                                                AC - split type ductless system
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.indoor_fireplace ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="m31 6v2h-1v23h-6v-18h-16v18h-6v-23h-1v-2zm-15.368 8.991.959.702c3.317 2.43 5.141 5.07 5.382 7.934l.02.287.005.207.002.138c0 3.183-2.698 5.741-6 5.741-3.168 0-5.789-2.358-5.988-5.387l-.01-.218-.002-.147c.004-1.629.557-3.29 1.64-4.985l.224-.34.677-.98 1.238.783zm12.368-6.991h-24v21h2v-16a2 2 0 0 1 1.697-1.977l.154-.018.149-.005h16a2 2 0 0 1 1.995 1.85l.005.15v16h2zm-12 17.355-.092.093c-.62.655-.908 1.233-.908 1.719 0 .428.413.833 1 .833s1-.405 1-.833c0-.445-.242-.968-.76-1.556l-.148-.163zm.351-7.315-1.766 3.562-1.466-.927-.152.265c-.534.96-.844 1.878-.937 2.749l-.023.289-.007.26.001.118c.025.92.408 1.761 1.024 2.403.14-1.137.86-2.237 2.097-3.324l.238-.203.64-.534.64.534c1.384 1.153 2.188 2.32 2.335 3.528a3.593 3.593 0 0 0 1.018-2.27l.007-.218-.006-.28c-.088-1.865-1.113-3.702-3.129-5.51l-.268-.236zm14.649-16.04v2h-30v-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Indoor fireplace: pellet stove
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.heating ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M16 0a5 5 0 0 1 4.995 4.783L21 5l.001 12.756.26.217a7.984 7.984 0 0 1 2.717 5.43l.017.304L24 24a8 8 0 1 1-13.251-6.036l.25-.209L11 5A5 5 0 0 1 15.563.019l.22-.014zm0 2a3 3 0 0 0-2.995 2.824L13 5v13.777l-.428.298a6 6 0 1 0 7.062.15l-.205-.15-.428-.298L19 11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.126A4.002 4.002 0 0 1 16 28a4 4 0 0 1-1-7.874V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>
                                            <div className="amen-modal-name">
                                                Heating
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Home safety
                                </div>
                                    <div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M23 3a2 2 0 0 1 1.995 1.85L25 5v1.522l5-1.999v11.954l-5-2V16a2 2 0 0 1-1.85 1.995L23 18l-6.1.001a5.005 5.005 0 0 1-3.984 3.915 5.002 5.002 0 0 1-4.7 4.08L8 26H4v4H2V20h2v4h4a3.001 3.001 0 0 0 2.872-2.13A5.004 5.004 0 0 1 7.1 18.002L4 18a2 2 0 0 1-1.995-1.85L2 16V5a2 2 0 0 1 1.85-1.995L4 3zM12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm11-9H4v11h3.1a5.002 5.002 0 0 1 9.8 0H23zm5 2.476l-3 1.2v3.647l3 1.2zM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name" id='camera'>
                                                {safetyData.camera}
                                                <div className="amen-modal-name-sub">
                                                        {safetyData.camera_info}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>
                                    { safetyData.smoke_alarm ?(<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm-4.9 14a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Smoke alarm
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { safetyData.carbon ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v18a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Carbon monoxide alarm
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { safetyData.fire_extinguisher ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M7 28H5V15c0-4.997 3.356-9.304 8.061-10.603A3 3 0 0 1 17.69 2.52l2.66-2.28 1.302 1.52L19.036 4H23v2h-4.17A3.008 3.008 0 0 1 17 7.83l.001.242a7.007 7.007 0 0 1 5.982 6.446l.013.24L23 15v15a2 2 0 0 1-1.85 1.995L21 32H11a2 2 0 0 1-1.995-1.85L9 30v-6H7zm9-18c-2.617 0-4.775 2.014-4.983 4.573l-.013.22L11 15v15h10V15.018l-.003-.206A5 5 0 0 0 16 10zm-2.654-3.6a9.002 9.002 0 0 0-6.342 8.327L7 15v7h2v-7.018l.005-.244A7.001 7.001 0 0 1 15 8.071v-.242a3.01 3.01 0 0 1-1.654-1.43zM16 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Fire extinguisher
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                   { safetyData.first_aid_kit ? ( <div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M26 3a5 5 0 0 1 4.995 4.783L31 8v16a5 5 0 0 1-4.783 4.995L26 29H6a5 5 0 0 1-4.995-4.783L1 24V8a5 5 0 0 1 4.783-4.995L6 3zm0 2H6a3 3 0 0 0-2.995 2.824L3 8v16a3 3 0 0 0 2.824 2.995L6 27h20a3 3 0 0 0 2.995-2.824L29 24V8a3 3 0 0 0-2.824-2.995zm-7 4v4h4v6h-4v4h-6v-4.001L9 19v-6l4-.001V9zm-2.001 2h-2L15 14.999h-4.001V17L15 16.998 14.999 21h2L17 17h3.999v-2H17z"></path></svg>
                                            <div className="amen-modal-name">
                                                First aid kit
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Internet and Office
                                </div>
                                    { amenities.wifi ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path></svg>
                                            <div className="amen-modal-name">
                                                Wifi
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.dedicated_workspace ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z"></path></svg>
                                            <div className="amen-modal-name">
                                                Dedicated workspace
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Kitchen and dining
                                </div>
                                    { amenities.kitchen ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>
                                            <div className="amen-modal-name">
                                                Kitchen
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.refrigerator ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3v26a2 2 0 0 1-1.85 1.995L25 31H7a2 2 0 0 1-1.995-1.85L5 29V3a2 2 0 0 1 1.85-1.995L7 1zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Refrigerator
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.microwave ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M29 3a2 2 0 0 1 1.995 1.85L31 5v22a2 2 0 0 1-1.85 1.995L29 29H3a2 2 0 0 1-1.995-1.85L1 27V5a2 2 0 0 1 1.85-1.995L3 3zm0 2H3v22h26zm-6 2v18H5V7zm-2 2H7v14l3 .001a4.975 4.975 0 0 1-.992-2.721L9 20v-3h10v3a4.978 4.978 0 0 1-1 3.001L21 23zm-4 10h-6v1a3 3 0 0 0 2.65 2.98l.174.015L14 23a3 3 0 0 0 2.995-2.824L17 20zm9-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Microwave
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.cooking_basics ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>
                                            <div className="amen-modal-name">
                                                Cooking basics
                                                <div className="amen-modal-name-sub">
                                                    {amenities.cooking_basics_info}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.dishes_and_silverware ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M29 1v2c-7.18 0-13 5.82-13 13 0 7.077 5.655 12.833 12.693 12.996L29 29v2c-8.284 0-15-6.716-15-15 0-8.18 6.547-14.83 14.686-14.997zM3 1h2v6h2V1h2v6h2V1h2v9a5.002 5.002 0 0 1-3.999 4.9L9 31H7V14.9a5.01 5.01 0 0 1-3.978-4.444l-.017-.232L3 10zm26 6v2a7 7 0 0 0-.24 13.996L29 23v2a9 9 0 0 1-.265-17.996zM10.999 9h-6v.975l.005.176a3 3 0 0 0 5.99.025L11 10z"></path></svg>
                                            <div className="amen-modal-name">
                                                Dishes and silverware
                                                <div className="amen-modal-name-sub">
                                                    {amenities.dishes_and_silverware_info}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.dishwasher ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm0 10H4v16h24zm-2 2v4a3.001 3.001 0 0 1-2 2.829V24h2v2h-6v-2l2-.001v-3.17a3.002 3.002 0 0 1-1.995-2.653L20 18v-4zm-14 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm12 0h-2v2a1 1 0 0 0 .77.974l.113.02L23 19a1 1 0 0 0 .993-.883L24 18zm4-12H4v6h24zm-6 2v2H10V6zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Diswasher
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null }
                                    { amenities.stove ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M27 0a2 2 0 0 1 1.995 1.85L29 2v26a2 2 0 0 1-1.85 1.995L27 30H5a2 2 0 0 1-1.995-1.85L3 28V2A2 2 0 0 1 4.85.005L5 0zm0 2H5v26h22zm-3 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.333 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.334 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 24a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm13-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>
                                            <div className="amen-modal-name">
                                                Stove
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null }
                                    { amenities.oven ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm0 10H4v16h24zm-2 2v12H6V14zm-2 2H8v8h16zm4-12H4v6h24zm-3 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Oven
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null }
                                    { amenities.coffee_maker ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M25 2a1 1 0 0 1 .936.649l.034.108 1 4a1 1 0 0 1-.857 1.237L26 8h-9v2h-2V7.999H4.999v20l3 .001a5 5 0 0 1-.716-4.66l.102-.263 2.515-6.04-1.794-3.59a1 1 0 0 1 .779-1.44L9 12h14a1 1 0 0 1 .94 1.341l-.046.106L22.618 16H24a5 5 0 0 1 4.995 4.783L29 21v4h-2v-4a3 3 0 0 0-2.824-2.995L24 18h-1.5l2.115 5.077A4.998 4.998 0 0 1 24 28L27 28v2H4a1 1 0 0 1-.993-.883L3 29V3a1 1 0 0 1 .883-.993L4 2zM12.647 22a6.638 6.638 0 0 0-2.91.628l-.506 1.218a3 3 0 0 0-.194.682l-.028.235L9 25a3 3 0 0 0 2.824 2.995l.156.004 8.027.001.23-.01a3 3 0 0 0 2.603-2.023c-1.692-.121-2.93-.67-4.836-1.889l-.375-.243C15.493 22.44 14.452 22 12.647 22zm7.686-4h-8.667l-.913 2.188A9.062 9.062 0 0 1 12.647 20c2.188 0 3.515.52 5.75 1.95l.38.246c1.74 1.136 2.741 1.627 4.034 1.76l-.042-.11zm1.048-4H10.618l1 2h8.763zm2.837-10.001H4.999v2h19.719z"></path></svg>
                                            <div className="amen-modal-name">
                                                Coffee maker
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.baking_sheet ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="m4 25c.513 0 .942.503 1 1v2h22v-2c0-.513.5-1 1-1h3v2h-2v2c0 .513-.5 1-1 1h-24c-.5 0-1-.5-1-1v-2h-2v-2zm16-10c2.989 0 5.352 2.256 5.669 5.203l.182 2.592a3 3 0 0 1 -2.788 3.198l-.102.005-13.819.002a3 3 0 0 1 -3-3l.17-2.568c.203-2.982 2.725-5.317 5.688-5.432zm-5 2h-2v3h-2v-2.831a3.833 3.833 0 0 0 -2.673 3.19 21.494 21.494 0 0 0 -.185 2.641c0 .513.36.942.858 1h14c.512-.035.833-.452.857-.952a343.57 343.57 0 0 0 -.163-2.48 3.832 3.832 0 0 0 -2.694-3.398v2.83h-2v-3h-2v3h-2zm8.995-15.001 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155zm-5 0 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155zm-5 0 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155z"></path></svg>
                                            <div className="amen-modal-name">
                                                Baking sheet
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.barbeque_utensils ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M12.994 2h2c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183c-.867 1.391-1.278 2.301-1.418 3.393H9.043c.1-1.069.378-1.966.903-3H6c0 5.523 4.477 10 10 10 5.43 0 9.848-4.327 9.996-9.72L26 9l-3.765.001c-.704 1.177-1.05 2.014-1.177 2.999h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88c1.116-1.791 1.477-2.784 1.478-4.393h2c-.002 1.919-.408 3.162-1.506 5L28 7v2c0 .682-.057 1.35-.166 2H30v2h-2.683a12.039 12.039 0 0 1-5.896 6.709l4.49 9.877-1.821.828-2.006-4.415H17V30h-2v-4H9.916L7.91 30.413l-1.82-.828 4.49-9.877A12.039 12.039 0 0 1 4.682 13H2v-2h2.166a12.058 12.058 0 0 1-.162-1.695L4 9V7h7.127l.389-.609c1.116-1.79 1.477-2.783 1.478-4.392zm-.56 18.461L10.824 24H15v-3.04a11.95 11.95 0 0 1-2.566-.498zM17 20.96v3.04h4.175l-1.609-3.538c-.684.213-1.395.366-2.126.453zm.994-18.96h2c-.002 2.063-.471 3.345-1.765 5.425l-.753 1.183c-.867 1.391-1.278 2.301-1.418 3.393h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88c1.116-1.791 1.477-2.784 1.478-4.393z"></path></svg>
                                            <div className="amen-modal-name">
                                                Barbeque utensils
                                                <div className="amen-modal-name-sub">
                                                    {amenities.barbeque_utensils_info}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.bread_maker ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="m4 25c.513 0 .942.503 1 1v2h22v-2c0-.513.5-1 1-1h3v2h-2v2c0 .513-.5 1-1 1h-24c-.5 0-1-.5-1-1v-2h-2v-2zm16-10c2.989 0 5.352 2.256 5.669 5.203l.182 2.592a3 3 0 0 1 -2.788 3.198l-.102.005-13.819.002a3 3 0 0 1 -3-3l.17-2.568c.203-2.982 2.725-5.317 5.688-5.432zm-5 2h-2v3h-2v-2.831a3.833 3.833 0 0 0 -2.673 3.19 21.494 21.494 0 0 0 -.185 2.641c0 .513.36.942.858 1h14c.512-.035.833-.452.857-.952a343.57 343.57 0 0 0 -.163-2.48 3.832 3.832 0 0 0 -2.694-3.398v2.83h-2v-3h-2v3h-2zm8.995-15.001 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155zm-5 0 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155zm-5 0 2 .002c-.002 2.06-.472 3.342-1.766 5.422l-.752 1.183c-1.061 1.702-1.44 2.683-1.474 4.157l-.003.237h-2c0-2.16.515-3.466 1.954-5.729l.562-.88c1.061-1.701 1.44-2.682 1.476-4.155z"></path></svg>
                                            <div className="amen-modal-name">
                                                Bread maker
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Location features
                                </div>
                                    { amenities.private_entrance ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm0 2H7l-.001 26h18zm-3 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Private entrance
                                                <div className="amen-modal-name-sub">
                                                    {amenities.private_entrance_info}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Outdoor
                                </div>
                                    { amenities.patio_or_balcony ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M23 1a2 2 0 0 1 1.995 1.85L25 3v16h4v2h-2v8h2v2H3v-2h2v-8H3v-2h4V3a2 2 0 0 1 1.85-1.995L9 1zM9 21H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-10-8H9v6h6zm8 0h-6v6h6zM15 3H9v8h6zm8 0h-6v8h6z"></path></svg>
                                            <div className="amen-modal-name">
                                                Private patio or balcony
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null }
                                    { amenities.backyard ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5.002 5.002 0 0 1-4 4.9v4.287C18.652 23.224 21.153 22 23.95 22a8.94 8.94 0 0 1 3.737.814l.313.15.002 2.328A6.963 6.963 0 0 0 23.95 24c-3.542 0-6.453 2.489-6.93 5.869l-.02.15-.006.098a1 1 0 0 1-.876.876L16 31a1 1 0 0 1-.974-.77l-.02-.124C14.635 26.623 11.615 24 7.972 24a6.963 6.963 0 0 0-3.97 1.234l.002-2.314c1.218-.6 2.57-.92 3.968-.92 2.818 0 5.358 1.24 7.028 3.224V20.9a5.002 5.002 0 0 1-3.995-4.683L11 16l-.217-.005a5 5 0 0 1 0-9.99L11 6l.005-.217A5 5 0 0 1 16 1zm2.864 14.1c-.811.567-1.799.9-2.864.9s-2.053-.333-2.864-.9l-.062.232a3 3 0 1 0 5.851.001zM11 8a3 3 0 1 0 .667 5.926l.234-.062A4.977 4.977 0 0 1 11 11c0-1.065.333-2.053.9-2.864l-.232-.062A3.013 3.013 0 0 0 11 8zm10 0c-.228 0-.45.025-.667.074l-.234.062C20.667 8.947 21 9.935 21 11a4.977 4.977 0 0 1-.9 2.864l.232.062A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.926 3.667l.062.234C13.947 6.333 14.935 6 16 6s2.053.333 2.864.9l.062-.232A3 3 0 0 0 16 3z"></path></svg>
                                            <div className="amen-modal-name">
                                                Private backyard - Not fully fenced
                                                    <div className="amen-modal-name-sub">
                                                        {amenities.backyard_info}
                                                    </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null }
                                    { amenities.outdoor_furniture ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M29 15v16h-2v-6h-6v6h-2v-6l.005-.15a2 2 0 0 1 1.838-1.844L21 23h6v-8zM5 15v8h6a2 2 0 0 1 1.995 1.85L13 25v6h-2v-6H5v6H3V15zM16 1a15 15 0 0 1 13.556 8.571 1 1 0 0 1-.79 1.423l-.113.006H17v8h8v2h-8v10h-2V21H7v-2h8v-8H3.347a1 1 0 0 1-.946-1.323l.043-.106A15 15 0 0 1 16 1zm0 2C11.71 3 7.799 5.097 5.402 8.468l-.197.284L5.042 9h21.915l-.162-.248a12.995 12.995 0 0 0-10.1-5.734l-.365-.014z"></path></svg>
                                            <div className="amen-modal-name">
                                                Outdoor furniture
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.bbq_grill ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M12.994 2h2c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183c-.867 1.391-1.278 2.301-1.418 3.393H9.043c.1-1.069.378-1.966.903-3H6c0 5.523 4.477 10 10 10 5.43 0 9.848-4.327 9.996-9.72L26 9l-3.765.001c-.704 1.177-1.05 2.014-1.177 2.999h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88c1.116-1.791 1.477-2.784 1.478-4.393h2c-.002 1.919-.408 3.162-1.506 5L28 7v2c0 .682-.057 1.35-.166 2H30v2h-2.683a12.039 12.039 0 0 1-5.896 6.709l4.49 9.877-1.821.828-2.006-4.415H17V30h-2v-4H9.916L7.91 30.413l-1.82-.828 4.49-9.877A12.039 12.039 0 0 1 4.682 13H2v-2h2.166a12.058 12.058 0 0 1-.162-1.695L4 9V7h7.127l.389-.609c1.116-1.79 1.477-2.783 1.478-4.392zm-.56 18.461L10.824 24H15v-3.04a11.95 11.95 0 0 1-2.566-.498zM17 20.96v3.04h4.175l-1.609-3.538c-.684.213-1.395.366-2.126.453zm.994-18.96h2c-.002 2.063-.471 3.345-1.765 5.425l-.753 1.183c-.867 1.391-1.278 2.301-1.418 3.393h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88c1.116-1.791 1.477-2.784 1.478-4.393z"></path></svg>
                                            <div className="amen-modal-name">
                                                BBQ grill
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Parking and facilities
                                </div>
                                    { amenities.parking ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Free parking on premises
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null }
                                    { amenities.hot_tub_or_pool ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M9.5 2a4.5 4.5 0 0 1 3.527 7.295c.609.215 1.173.55 1.66.988l.191.182L17.414 13H31v2h-2v14a2 2 0 0 1-1.85 1.995L27 31H5a2 2 0 0 1-1.995-1.85L3 29V15H1v-2h2.1a5.009 5.009 0 0 1 2.955-3.608A4.5 4.5 0 0 1 9.5 2zm7.085 13H5v14h22V15h-7.586l3.293 3.294-1.414 1.414zM9.5 4a2.5 2.5 0 0 0-1 4.792V11H8a3.001 3.001 0 0 0-2.83 2h9.415l-1.121-1.121a3 3 0 0 0-1.923-.872L11.343 11H10.5V8.792A2.5 2.5 0 0 0 9.5 4zm15.486-3a6.957 6.957 0 0 1-1.803 4.07l-.445.463A8.971 8.971 0 0 0 20.354 11H18.35a10.975 10.975 0 0 1 3.202-7.118A4.961 4.961 0 0 0 22.974 1zm2.007 0h2.004a10.96 10.96 0 0 1-3.202 7.124A4.974 4.974 0 0 0 24.373 11h-2.012a6.97 6.97 0 0 1 1.804-4.064l.444-.462A8.958 8.958 0 0 0 26.993.999z"></path></svg>
                                            <div className="amen-modal-name">
                                                Private hot tub
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                <div className="amen-categories">
                                    Services
                                </div>
                                   { rulesData.pets ? ( <div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>
                                            <div className="amen-modal-name">
                                                Pets allowed
                                                    <div className="amen-modal-name-sub">
                                                        {rulesData.pets_info}
                                                    </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.long_term_stay ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path></svg>
                                            <div className="amen-modal-name">
                                                Long term stays allowed
                                                    <div className="amen-modal-name-sub">
                                                        {amenities.long_term_stay_info}
                                                    </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.smart_lock ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="m16.8438 27.1562-.00005-3.39845-.2608465.0913211c-.9857292.3215073-2.0303948.5116467-3.1127817.5499306l-.4076218.0071983-.2927873-.0037049c-6.03236807-.1528291-10.89442655-5.0148222-11.04725775-11.0472069l-.00370495-.2927882.00370495-.2927873c.1528312-6.03236807 5.01488968-10.89442655 11.04725775-11.04725775l.2927873-.00370495.2927882.00370495c6.0323847.1528312 10.8943778 5.01488968 11.0472069 11.04725775l.0037049.2927873-.00663.3912275c-.0484899 1.4286741-.3615343 2.7917824-.8920452 4.0406989l-.1327748.2963236 7.90645 7.90705v5.5834h-5.5834l-4.12505-4.12545zm-6.5313-19.93745c1.708641 0 3.09375 1.38511367 3.09375 3.09375 0 1.7086436-1.3851064 3.09375-3.09375 3.09375-1.70863633 0-3.09375-1.385109-3.09375-3.09375 0-1.70863365 1.38511635-3.09375 3.09375-3.09375zm0 2.0625c-.56954635 0-1.03125.46170365-1.03125 1.03125 0 .5695521.46169942 1.03125 1.03125 1.03125.5695564 0 1.03125-.4616936 1.03125-1.03125 0-.56955058-.4616979-1.03125-1.03125-1.03125zm12.1147 15.81255 4.12455 4.12495h2.667v-2.667l-8.37295-8.37255.3697-.6775.1603998-.3074798c.56763-1.1397167.90791-2.4128858.9606815-3.761954l.0072187-.3697662-.0038197-.2688703c-.1397418-4.91222958-4.0963692-8.86881961-9.0086094-9.00856l-.2688709-.0038197-.2688703.0038197c-4.91222958.13974039-8.86881961 4.09633042-9.00856 9.00856l-.0038197.2688703.0038197.2688709c.14228112 5.0015536 4.24146819 9.0124291 9.2774303 9.0124291 1.4456308 0 2.8116781-.3298367 4.0293209-.9177001l.3012791-.1522999 1.5131-.7998-.00045 4.61975z"></path></svg>
                                            <div className="amen-modal-name">
                                                {rulesData.self_check}
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                    { amenities.smart_lock ? (<div className="amen-modal-content">
                                        <div className="amen-modal-group">
                                        <svg viewBox="0 0 32 32"><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm0 2H7l-.001 26h18zm-9 6a3 3 0 0 1 2.995 2.824L19 12l.001 2A5 5 0 1 1 13 14v-2a3 3 0 0 1 3-3zm0 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-6a1 1 0 0 0-.993.883L15 12v1.1a5.023 5.023 0 0 1 2.001 0L17 12a1 1 0 0 0-1-1z"></path></svg>
                                            <div className="amen-modal-name">
                                                Smart lock
                                            </div>
                                        </div>
                                        <div className='border-bottom'></div>
                                    </div>) : null}
                                </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}