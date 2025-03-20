// Content protection utilities

export const enableContentProtection = () => {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+S, Ctrl+P, Ctrl+Shift+I, F12
    if (
      (e.ctrlKey && (e.key === 's' || e.key === 'p' || (e.shiftKey && e.key === 'i'))) ||
      e.key === 'F12'
    ) {
      e.preventDefault();
      return false;
    }

    // Prevent Ctrl+C for copying
    if (e.ctrlKey && e.key === 'c') {
      // Allow copying in form elements
      const activeElement = document.activeElement;
      const isFormElement = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
      
      if (!isFormElement) {
        e.preventDefault();
        return false;
      }
    }
  });

  // Disable print screen (not fully reliable but adds a layer)
  window.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      // Optional: show a message or take other action
      console.log('Print Screen disabled');
    }
  });

  // Disable drag and drop for all elements
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Add a warning message when leaving the page (can be annoying for users)
  // window.addEventListener('beforeunload', (e) => {
  //   const message = 'Content on this site is protected.';
  //   e.returnValue = message;
  //   return message;
  // });

  console.log('Content protection enabled');
};
