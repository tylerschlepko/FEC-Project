import { createContext, useState, useEffect, useRef } from "react";
import { format } from 'date-fns' //to format the dates

const HostContext = createContext()

export const HostProvider = ({ children }) => {
    const miniCalenderRef = useRef()
    const [showHouseRules, setShowHouseRules] = useState(false)
    const [showMoreSafety, setShowMoreSafety] = useState(false)
    const [showCancellation, setShowCancellation] = useState(false)
    const [hostData, setHostData] = useState([])
    const [cohostData, setCohostData] = useState([])
    const [safetyData, setSafetyData] = useState([])
    const [rulesData, setRulesData] = useState([])
    const [cancelData, setCancelData] = useState([])
    const [additionalRules, setAdditionalRules] = useState([])
    const [showAllAmenities, setShowAllAmenities] = useState(false)
    const [dateRange, setDateRange] = useState({from: "", to: ""}) //dates in Mar 14, 2023 format
    const [nightlyRate, setNightlyRate] = useState()
    const [isMiniCalendarVisible, setIsMiniCalendarVisible] = useState(false)
    
    useEffect(() => {
        const fetchHostData = async () => {
            const response = await fetch('http://localhost:3000/property');
            const host = await response.json();
            setHostData(host[0].host_info);
            setCohostData(host[0].cohost_info)
            setSafetyData(host[0].safety)
            setRulesData(host[0].house_rules)
            setCancelData(host[0].cancellation_policy)
            setAdditionalRules(host[0].house_rules.additional_rules)
            setNightlyRate(host[0].nightly_rate)
        };
        
        fetchHostData();
    },[]) 

    const openHouseRules = () => {
        setShowHouseRules(true)
    }

    const closeHouseRules = () => {
        setShowHouseRules(false)
    }

    const openSafety = () => {
        setShowMoreSafety(true)
    }

    const closeSafety = () => {
        setShowMoreSafety(false)
    }

    const openCancellation = () => {
        setShowCancellation(true)
    }

    const closeCancellation = () => {
        setShowCancellation(false)
    }

    const openAmenities = () => {
        setShowAllAmenities(true)
    }

    const closeAmenities = () => {
        setShowAllAmenities(false)
    }

    const emptyCalendar = () => {
        setDateRange({from: "", to: ""})
    }

    // Rental Modal, Mini Calendar
    const openMiniCalendar = () => {
        setIsMiniCalendarVisible(true)
    }

    const closeMiniCalendar = () => {
        setIsMiniCalendarVisible(false)
    }

    // Login Menu outside-click, close-menu use-effect
    useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu, then close the menu
        if (isMiniCalendarVisible && miniCalenderRef.current && !miniCalenderRef.current.contains(e.target)) {
            setIsMiniCalendarVisible(false)
        }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMiniCalendarVisible])


    // Disables vertical scroll-bar when Login/Language window is visible
    useEffect(() => {
        showHouseRules || showMoreSafety || showCancellation || showAllAmenities
          ? (document.body.parentElement.style.overflowY = "clip")
          : (document.body.parentElement.style.overflowY = "auto");
      }, [showHouseRules, showMoreSafety, showCancellation, showAllAmenities]);

    return (
        <HostContext.Provider 
            value ={{
                showHouseRules,
                openHouseRules,
                closeHouseRules,
                showMoreSafety,
                openSafety,
                closeSafety,
                showCancellation,
                openCancellation,
                closeCancellation,
                hostData,
                cohostData,
                safetyData,
                rulesData,
                cancelData,
                additionalRules,
                nightlyRate,
                openAmenities,
                closeAmenities,
                showAllAmenities,
                setDateRange,
                dateRange,
                emptyCalendar,
                isMiniCalendarVisible,
                openMiniCalendar,
                closeMiniCalendar,
                miniCalenderRef
            }}
        >
            {children}
        </HostContext.Provider>
    )
}

export default HostContext;
