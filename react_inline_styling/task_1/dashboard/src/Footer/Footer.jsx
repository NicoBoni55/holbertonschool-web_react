import { getCurrentYear, getFooterCopy } from "../utils/utils"
import './Footer.css'

export default function Footer() {
return (
    <div className='App-footer'>
        <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </div>
)}