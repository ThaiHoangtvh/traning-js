const getQuery = (name) => document.querySelector(name);
const checkVal = () => {
    const del = document.querySelectorAll('.error-alert');
    if (del.length > 0) {
        del.forEach(element => {
            element.remove();
        });
    }

    const getElement = (name) => document.getElementById(name);

    const age = getElement('patientage');
    const list_error = document.getElementsByClassName('error-alert');
    const email = getElement('emailid');
    const patientgender = getElement('patientgender');
    const otherstatus = getElement('otherstatus');
    const phoneno = getElement('phoneno');
    const group1 = getElement('group1');
    const gr1_t1 = getElement('married');
    const gr1_t2 = getElement('unmarried');
    const gr1_t3 = getElement('other');
    const re = /\S+@\S+\.\S+/;
    if (gr1_t3.checked) {
        if (otherstatus.value.length == 0) {
            const ott = otherstatus.parentElement;
            // ott.querySelector('.error-alert').innerText = 'Bạn không được bỏ trống trường này';
            var add_html = "<span class='error-alert'>Bạn không được bỏ trống trường này</span>";
            otherstatus.insertAdjacentHTML('afterend', add_html);
        }
    }
    if (age.value.length == 0 || (!gr1_t1.checked && !gr1_t2.checked && !gr1_t3.checked) || phoneno.value.length == 0 || patientgender.options[patientgender.selectedIndex].value == 0 || email.value.length == 0) {
        if (!gr1_t1.checked && !gr1_t2.checked && !gr1_t3.checked) {
            // group1.querySelector('.error-alert').innerText = 'Bạn không được bỏ trống trường này';
            var add_html = "<span class='error-alert'>Bạn không được bỏ trống trường này</span>";
            group1.insertAdjacentHTML('afterend', add_html);
            gr1_t1.scrollIntoView({ top: 10, behavior: 'smooth' });
            gr1_t1.focus();
        } else {
            if (gr1_t3.checked) {
                if (otherstatus.value.length == 0) {
                    const ott = otherstatus.parentElement;
                    // ott.querySelector('.error-alert').innerText = 'Bạn không được bỏ trống trường này';
                    var add_html = "<span class='error-alert'>Bạn không được bỏ trống trường này</span>";
                    otherstatus.insertAdjacentHTML('afterend', add_html);
                }
            }

        }
        // 
        if (!phoneno.value) {
            const phone = phoneno.parentElement;
            // phone.querySelector('.error-alert').innerText = 'Bạn không được bỏ trống trường này';
            var add_html = "<span class='error-alert'>Bạn không được bỏ trống trường này</span>";
            phoneno.insertAdjacentHTML('afterend', add_html);
            phone.scrollIntoView({ top: 10, behavior: 'smooth' });
            phoneno.focus();

        }
        //
        if (patientgender.options[patientgender.selectedIndex].value == 0) {
            const op = patientgender.parentElement;
            // op.querySelector('.error-alert').innerText = 'Bạn không được bỏ trống trường này';
            var add_html = "<span class='error-alert'>Bạn không được bỏ trống trường này</span>";
            patientgender.insertAdjacentHTML('afterend', add_html);
            patientgender.focus();

        } else {
            const op = patientgender.parentElement;
            // op.querySelector('.error-alert').remove();
        }
        //
        if (email.value.length == 0) {
            const e = email.parentElement;
            // e.querySelector('.error-alert').remove();
            // e.querySelector('.error-alert').innerText = 'Bạn không được bỏ trống trường này';
            var add_html = "<span class='error-alert'>Bạn không được bỏ trống trường này</span>";
            email.insertAdjacentHTML('afterend', add_html);
            email.focus();
        } else {
            if (!email.value.match(re)) {
                const mail_error = email.parentElement;
                // mail_error.querySelector('.error-alert').innerText = 'Vui lòng nhập đúng định dạng email';
                var add_html = "<span class='error-alert'>Vui lòng nhập đúng định dạng email</span>";
                email.insertAdjacentHTML('afterend', add_html);
                email.scrollIntoView({ top: 10, behavior: 'smooth' });
                email.focus();
                // return false;
            }
        }
        // 
        if (age.value.length == 0) {
            const t = age.parentElement;
            // t.querySelector('.error-alert').innerText = 'Bạn không được bỏ trống trường này';
            var add_html = "<span class='error-alert'>Bạn không được bỏ trống trường này</span>";
            age.insertAdjacentHTML('afterend', add_html);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
            age.focus();


        } else {
            const t = age.parentElement;
            // t.querySelector('.error-alert').remove();
        }
        return false;
    } else {
        if (gr1_t3.checked) {
            if (otherstatus.value.length !== 0) {
                document.querySelector('.value-marital').innerText = otherstatus.value;

            }
        }
        if (gr1_t1.checked) {
            document.querySelector('.value-marital').innerText = gr1_t1.value;
        }
        if (gr1_t2.checked) {
            document.querySelector('.value-marital').innerText = gr1_t2.value;
        }

        getQuery('.value-fn').innerText = getElement('firstname').value;
        getQuery('.value-ln').innerText = getElement('lastname').value;
        getQuery('.value-age').innerText = age.value;
        getQuery('.value-nickname').innerText = getElement('nicknameid').value;
        getQuery('.value-email').innerText = email.value;
        getQuery('.value-patient').innerText = patientgender.value;
        getQuery('.value-phone').innerText = phoneno.value;
        getQuery('.value-spouce').innerText = getElement('spoucename').value;
        getQuery('.value-whome').innerText = getElement('whomeid').value;
        getQuery('.value-occupation').innerText = getElement('occupationid').value;
        if (document.querySelector('input[name="group2"]:checked')) {
            getQuery('.value-retired').innerText = getQuery('input[name="group2"]:checked').value;
        }

        getQuery('.value-disability').innerText = getElement('date-time').value;
        return false;


    }

}

const toggleSlide = () => {
    let radio = document.getElementsByName('group1');
    for (let index = 0; index < radio.length; index++) {
        if (radio[index].checked && radio[index].value == "other") {
            document.querySelector('.item.otherstatus').classList.add('active');

        } else {
            document.querySelector('.item.otherstatus').classList.remove('active');
        }

    }
}