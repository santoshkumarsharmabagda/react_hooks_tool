import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';

const UseEffect = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [seconds, setSeconds] = useState(0);

    const nvi = useNavigate()

  // useEffect का उपयोग करके साइड इफेक्ट्स को हैंडल करें
  useEffect(() => {
    // हर एक सेकंड में टाइमर को अपडेट करने के लिए एक इंटरवल सेट करें
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // क्लीनअप फ़ंक्शन: जब कंपोनेंट अनमाउंट हो जाए, तो इंटरवल को क्लियर करें
    return () => clearInterval(interval);
  }, []); // खाली डिपेंडेंसी ऐरे का मतलब है कि यह इफेक्ट केवल एक बार चलेगा, जब कंपोनेंट माउंट होगा


  useEffect(() => {
    // Component mount hone ke baad
    console.log('Component mounted');
setTimeout(()=>{
console.log("ok t");

},3000)
    return () => {
      // Component unmount hone ke waqt
      console.log('Component will unmount');
    };
  }, []);
  return (
    <div>
        {theme}
        <p>आपने {seconds} सेकंड्स बिताए हैं इस पेज पर</p>
        <button onClick={()=>{nvi("/usest")}} >go</button>
 <button onClick={()=>{setTheme("dark")}}>Toggle Theme</button>
    </div>
  )
}

export default UseEffect