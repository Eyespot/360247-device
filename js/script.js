var link = document.querySelector(".writeus");
            
            var popup = document.querySelector(".modal-form");
            var close = popup.querySelector(".modal-form-close");
            
            var form = popup.querySelector(".writeus-form");
            var nameinput = popup.querySelector("[name=name-field]");
            var emailinput = popup.querySelector("[name=email-field]");
            var letterarea = popup.querySelector("[name=letter-field]");
            
            var storagename = localStorage.getItem("nameinput");
            var storagemail = localStorage.getItem("emailinput");
            
            link.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.add("modal-form-show");
                
                if (storagename) {
                    nameinput.value = storagename;
                }
                
                if (storagemail) {
                    emailinput.value = storagemail;
                    letterarea.focus();
                }   else {
                    nameinput.focus();
                }
                
            });
            
            close.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.remove("modal-form-show");
                popup.classList.remove("modal-form-error");
            });
            
            form.addEventListener("submit", function(event) {
                if (!nameinput.value || !emailinput.value || !letterarea.value) {
                    event.preventDefault();
                    popup.classList.remove("modal-form-error");
                    popup.offsetWidth = popup.offsetWidth;
                    popup.classList.add("modal-form-error");
                } else {
                    localStorage.setItem("nameinput", nameinput.value);
                    localStorage.setItem("emailinput", emailinput.value);
                }
            });
            
            window.addEventListener("keydown", function(event) {
                if (event.keyCode === 27) {
                    if (popup.classList.contains("modal-form-show")) {
                        popup.classList.remove("modal-form-show");
                        popup.classList.remove("modal-form-error");
                    }
                }
            });


            var mapOpen = document.querySelector(".map");
            
            var overlay = document.querySelector(".modal-overlay");
            var mapPopup = document.querySelector(".modal-map");
            var mapClose = mapPopup.querySelector(".modal-map-close");

            mapOpen.addEventListener("click", function(event) {
                event.preventDefault();
                mapPopup.classList.add("modal-map-show");
                overlay.classList.add("modal-map-show");
                });

            mapClose.addEventListener("click", function(event) {
                event.preventDefault();
                mapPopup.classList.remove("modal-map-show");
                overlay.classList.remove("modal-map-show");
                });

            window.addEventListener("keydown", function(event) {
                if (event.keyCode === 27) {
                    if (mapPopup.classList.contains("modal-map-show")) {
                    mapPopup.classList.remove("modal-map-show");
                    overlay.classList.remove("modal-map-show");
                    }
                }
            });