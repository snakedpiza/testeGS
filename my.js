function testeJSON_GS() {
    const url = "https://script.googleusercontent.com/a/macros/jundiai.sp.gov.br/echo?user_content_key=bvxkicG1BDy1ndUJ8M_IRDqU_w28X489fCFxgrE2_dVtUqNFjmHjVll5JhTCXqrPNbcXTt_w9TgH2UlAZCCWpoT5ppe4syy9m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP8F6falZaUnjw_l5WF5jtMK4YFj_89rZFXACCea1dMdTtFBQNr9EWz8hdIL5aI1ixZWWTeh__XOaDefylc8n-peQ-GYVzjTZrX-b5b4Xk-MrxhmlNqT-jbZ&lib=M0PwQZ9gd0WIOslaerkiVeqakcI3LLvYQ";

    fetch(url)
        .then(d => d.json())
        .then(d => {

            document.getElementById("app").textContent = d[0].status;
        });
}