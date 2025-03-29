export default function formatTime(seconds: number, showFormatTimer: boolean) {

    if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600); 
      const minutes = Math.floor((seconds % 3600) / 60); 
      const sec = seconds % 60;

      if (showFormatTimer) {
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
      }
      
      return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(sec).padStart(2, "0")}s`;

    } else {
      const minutes = Math.floor(seconds / 60); 
      const sec = seconds % 60; 

      if (showFormatTimer) {
        return `${String(minutes).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
      }
      
      return `${String(minutes).padStart(2, "0")}m ${String(sec).padStart(2, "0")}s`;
    }

}