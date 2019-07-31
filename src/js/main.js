/*
myPosition 0 - menu
myPosition 1 - user settings
myPosition 2 - head settings
myPosition 3 - system settings
myPosition 4 - service

*/

const wayToDir = './src/images/JPEG/menu';
const wayToDirUser = wayToDir + '/01_user_settings';
const wayToDirHead = wayToDir + '/02_head_control';
const wayToDirSystem = wayToDir + '/03_system_settings';
const wayToDirServices = wayToDir + '/04_services';
const wayToDirMain = wayToDir + '/05_main';
const wayToDirWindow = wayToDir + '/06_window';
const wayToDirPrev = wayToDir + '/07_preview';
const wayToDirTVGid = wayToDir + '/08_tvgid';
const windowSimulation = document.getElementById('1');

//0. MAIN MENU
let myPosition = 5;
let index00 = 0;
let index01 = 0;
let index02 = 0;
let index03 = 0;
let index04 = 0;
const imgMenu = [];
imgMenu[0] = wayToDirUser + '/user_settings 00.jpg';
imgMenu[1] = wayToDirHead + '/head_control 00.jpg';
imgMenu[2] = wayToDirSystem + '/system_settings 00.jpg';
imgMenu[3] = wayToDirServices + '/services 00.jpg';

//1. USER SETTINGS
const imgUserSettings = [];
imgUserSettings[0] = wayToDirUser + '/user_settings 01.jpg';
imgUserSettings[1] = wayToDirUser + '/user_settings 01_1.jpg';
imgUserSettings[2] = wayToDirUser + '/user_settings 01_1_1.jpg';
imgUserSettings[3] = wayToDirUser + '/user_settings 01_1_1_1.jpg';

//2. HEAD SETTINGS
//pin
const imgHeadSettings1 = [];
imgHeadSettings1[0] = wayToDirHead + '/head_control 00_1.jpg';

//head menu
const imgHeadSettings11 = [];
imgHeadSettings11[0] = wayToDirHead + '/head_control 01.jpg';
imgHeadSettings11[1] = wayToDirHead + '/head_control 02.jpg';
imgHeadSettings11[2] = wayToDirHead + '/head_control 03.jpg';
imgHeadSettings11[3] = wayToDirHead + '/head_control 04.jpg';

//age
let index021 = 0;
const imgHeadSettings111 = [];
imgHeadSettings111[0] = wayToDirHead + '/head_control 01_1.jpg';
imgHeadSettings111[1] = wayToDirHead + '/head_control 01_2.jpg';
imgHeadSettings111[2] = wayToDirHead + '/head_control 01_3.jpg';
imgHeadSettings111[3] = wayToDirHead + '/head_control 01_4.jpg';
imgHeadSettings111[4] = wayToDirHead + '/head_control 01_5.jpg';

//new_pin
const imgHeadSettings112 = [];
imgHeadSettings112[0] = wayToDirHead + '/head_control 02_1.jpg';
imgHeadSettings112[1] = wayToDirHead + '/head_control 02_2.jpg';
imgHeadSettings112[2] = wayToDirHead + '/head_control 02_3.jpg';

//buy pin
const imgHeadSettings113 = [];
imgHeadSettings113[0] = wayToDirHead + '/head_control 03_1.jpg';

//buy
let index024 = 0;
const imgHeadSettings114 = [];
imgHeadSettings114[0] = wayToDirHead + '/head_control 04_1.jpg';
imgHeadSettings114[1] = wayToDirHead + '/head_control 04_3.jpg';
// imgHeadSettings114[2] = wayToDirHead + '/head_control 04_3.jpg';
const imgHeadSettings1141 = [];
imgHeadSettings1141[0] = wayToDirHead + '/head_control 04_1_1.jpg';

//3. SYSTEM SETTINGS
//system menu
const imgSysSettings1 = [];
imgSysSettings1[0] = wayToDirSystem + '/system_settings 01.jpg';
imgSysSettings1[1] = wayToDirSystem + '/system_settings 02.jpg';
imgSysSettings1[2] = wayToDirSystem + '/system_settings 03.jpg';
imgSysSettings1[3] = wayToDirSystem + '/system_settings 04.jpg';
imgSysSettings1[4] = wayToDirSystem + '/system_settings 05.jpg';
imgSysSettings1[5] = wayToDirSystem + '/system_settings 06.jpg';
imgSysSettings1[6] = wayToDirSystem + '/system_settings 07.jpg';
imgSysSettings1[7] = wayToDirSystem + '/system_settings 08.jpg';
imgSysSettings1[8] = wayToDirSystem + '/system_settings 09.jpg';

//internet
let index031 = 0;
const imgSysSettings11 = [];
imgSysSettings11[0] = wayToDirSystem + '/system_settings 01_1.jpg';
imgSysSettings11[1] = wayToDirSystem + '/system_settings 01_2.jpg';
imgSysSettings11[2] = wayToDirSystem + '/system_settings 01_3.jpg';
const imgSysSettings112 = [];
imgSysSettings112[0] = wayToDirSystem + '/system_settings 01_2_1.jpg';
imgSysSettings112[1] = wayToDirSystem + '/system_settings 01_2_2.jpg';
imgSysSettings112[2] = wayToDirSystem + '/system_settings 01_2_3.jpg';

//update
const imgSysSettings12 = [];
imgSysSettings12[0] = wayToDirSystem + '/system_settings 02_1.jpg';

//info
const imgSysSettings13 = [];
imgSysSettings13[0] = wayToDirSystem + '/system_settings 03_1.jpg';

//sleep
let index034 = 0;
const imgSysSettings14 = [];
imgSysSettings14[0] = wayToDirSystem + '/system_settings 04_1.jpg';
imgSysSettings14[1] = wayToDirSystem + '/system_settings 04_2.jpg';
imgSysSettings14[2] = wayToDirSystem + '/system_settings 04_3.jpg';
imgSysSettings14[3] = wayToDirSystem + '/system_settings 04_4.jpg';

//default audio
let index035 = 0;
const imgSysSettings15 = [];
imgSysSettings15[0] = wayToDirSystem + '/system_settings 05_1.jpg';
imgSysSettings15[1] = wayToDirSystem + '/system_settings 05_2.jpg';
imgSysSettings15[2] = wayToDirSystem + '/system_settings 05_3.jpg';

//default volume
const imgSysSettings16 = [];
imgSysSettings16[0] = wayToDirSystem + '/system_settings 06_1.jpg';

//default sub
let index037 = 0;
const imgSysSettings17 = [];
imgSysSettings17[0] = wayToDirSystem + '/system_settings 07_1.jpg';
imgSysSettings17[1] = wayToDirSystem + '/system_settings 07_2.jpg';
imgSysSettings17[2] = wayToDirSystem + '/system_settings 07_3.jpg';

//window
let index038 = 0;
const imgSysSettings18 = [];
imgSysSettings18[0] = wayToDirSystem + '/system_settings 08_1.jpg';
imgSysSettings18[1] = wayToDirSystem + '/system_settings 08_2.jpg';

//default settings
//1. yes/no
let index039 = 0;
const imgSysSettings19 = [];
imgSysSettings19[0] = wayToDirSystem + '/system_settings 09_1.jpg';
imgSysSettings19[1] = wayToDirSystem + '/system_settings 09_2.jpg';
//2. logo
const imgSysSettings191 = [];
imgSysSettings191[0] = wayToDirSystem + '/system_settings 09_1_1.jpg';
imgSysSettings191[1] = wayToDirSystem + '/system_settings 09_1_1_1.jpg';
//3. network
let index0392 = 0;
const imgSysSettings19111 = [];
imgSysSettings19111[0] = wayToDirSystem + '/system_settings 09_1_1_1_1.jpg';
imgSysSettings19111[1] = wayToDirSystem + '/system_settings 09_1_1_1_2.jpg';
imgSysSettings19111[2] = wayToDirSystem + '/system_settings 09_1_1_1_3.jpg';
//3.1 network wifi
const imgSysSettings191112 = [];
imgSysSettings191112[0] = wayToDirSystem + '/system_settings 09_1_1_1_2_1.jpg';
imgSysSettings191112[1] = wayToDirSystem + '/system_settings 09_1_1_1_2_2.jpg';
imgSysSettings191112[2] = wayToDirSystem + '/system_settings 09_1_1_1_2_3.jpg';
//4. search channel
const imgSysSettings191111 = [];
imgSysSettings191111[0] = wayToDirSystem + '/system_settings 09_1_1_1_1_1.jpg';
//5. time zone
let index03922 = 0;
const imgSysSettings1911111 = [];
imgSysSettings1911111[0] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_1.jpg';
imgSysSettings1911111[1] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2.jpg';
//5.1 time zone pick
let index039222 = 0;
const imgSysSettings19111112 = [];
imgSysSettings19111112[0] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_1.jpg';
imgSysSettings19111112[1] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_2.jpg';
imgSysSettings19111112[2] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_3.jpg';
imgSysSettings19111112[3] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_4.jpg';
imgSysSettings19111112[4] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_5.jpg';
imgSysSettings19111112[5] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_6.jpg';
imgSysSettings19111112[6] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_7.jpg';
imgSysSettings19111112[7] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_8.jpg';
imgSysSettings19111112[8] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_9.jpg';
imgSysSettings19111112[9] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_10.jpg';
imgSysSettings19111112[10] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_2_11.jpg';
//6. ready
let index0392211 = 0;
const imgSysSettings19111111 = [];
imgSysSettings19111111[0] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_1_1.jpg';
imgSysSettings19111111[1] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_1_2.jpg';
//6.1 ready repeat
let index03922111 = 0;
const imgSysSettings191111112 = [];
imgSysSettings191111112[0] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_1_2_1.jpg';
imgSysSettings191111112[1] = wayToDirSystem + '/system_settings 09_1_1_1_1_1_1_2_2.jpg';

//4. SERVICE
const imgService1 = [];
imgService1[0] = wayToDirServices + '/services 01.jpg';
imgService1[1] = wayToDirServices + '/services 02.jpg';
imgService1[2] = wayToDirServices + '/services 03.jpg';
const imgService11 = [];
imgService11[0] = wayToDirServices + '/services 01_1.jpg';
const imgService21 = [];
imgService21[0] = wayToDirServices + '/services 02_1.jpg';
imgService21[1] = wayToDirServices + '/services 02_1_1.jpg';
imgService21[2] = wayToDirServices + '/services 02_1_1_1.jpg';
imgService21[3] = wayToDirServices + '/services 02_1_1_1_1.jpg';
const imgService31 = [];
imgService31[0] = wayToDirServices + '/services 03_1.jpg';
imgService31[1] = wayToDirServices + '/services 03_1_1.jpg';

//5. MAIN MENU
let index05 = 1;
let index05_gor = 2;
let index051_gor = 1;
const imgStart = [];
imgStart[0] = wayToDirMain + '/_start 00.jpg';
imgStart[1] = wayToDirMain + '/_start 01.jpg';
imgStart[2] = wayToDirMain + '/_start 02.jpg';
imgStart[3] = wayToDirMain + '/_start 03.jpg';
imgStart[4] = wayToDirMain + '/_start 04.jpg';
imgStart[5] = wayToDirMain + '/_start 05.jpg';
imgStart[6] = wayToDirMain + '/_start 06.jpg';
imgStart[7] = wayToDirMain + '/_start 07.jpg';
imgStart[8] = wayToDirMain + '/_start 08.jpg';
imgStart[9] = wayToDirMain + '/_start 09.jpg';
imgStart[10] = wayToDirMain + '/_start 10.jpg';
imgStart[11] = wayToDirMain + '/_start 11.jpg';
const imgStartGor = [];
imgStartGor[0] = wayToDirMain + '/_start 002.jpg';
imgStartGor[1] = wayToDirMain + '/_start 001.jpg';
imgStartGor[2] = wayToDirMain + '/_start 00.jpg';
const imgStart2 = [];
imgStart2[0] = wayToDirMain + '/_start 011.jpg';
imgStart2[1] = wayToDirMain + '/_start 01.jpg';

//Избранное
let index052 = 0;
let index052_gor = 0;
const imgFavorites1 = [];
imgFavorites1[0] = wayToDirMain + '/start_menu_favorite 00.jpg';
imgFavorites1[1] = wayToDirMain + '/start_menu_favorite 01.jpg';
imgFavorites1[2] = wayToDirMain + '/start_menu_favorite 02.jpg';
imgFavorites1[3] = wayToDirMain + '/start_menu_favorite 03.jpg';
const imgFavorites2 = [];
imgFavorites2[0] = wayToDirMain + '/start_menu_favorite 10.jpg';
let index0522_gor = 0;
const imgFavorites21 = [];
imgFavorites21[0] = wayToDirMain + '/start_menu_favorite 11.jpg';

//Поиск
const imgSearch = [];
imgSearch[0] = wayToDirMain + '/search 00.jpg';

//TV
let index060 = 0;
const imgTV0 = [];
imgTV0[0] = wayToDirMain + '/TV/start_menu 001.jpg';
imgTV0[1] = wayToDirMain + '/TV/start_menu 002.jpg';

let index061 = 3;
const imgTV1 = [];
imgTV1[0] = wayToDirWindow + '/TV 00.jpg';
imgTV1[1] = wayToDirWindow + '/TV 01.jpg';
imgTV1[2] = wayToDirWindow + '/TV 02.jpg';
imgTV1[3] = wayToDirWindow + '/TV 03.jpg';
imgTV1[4] = wayToDirWindow + '/TV 04.jpg';
imgTV1[5] = wayToDirWindow + '/TV 05.jpg';
imgTV1[6] = wayToDirWindow + '/TV 06.jpg';
imgTV1[7] = wayToDirWindow + '/TV 07.jpg';
let index0612 = 0;
const imgTV0161 = [];
imgTV0161[1] = wayToDirWindow + '/TV 11.jpg';
imgTV0161[2] = wayToDirWindow + '/TV 10.jpg';
const imgTV16 = [];
imgTV16[0] = wayToDirWindow + '/TV 061.jpg';
imgTV16[1] = wayToDirWindow + '/TV 062.jpg';
let index067 = 0;
let index0671 = 0;
let index0672 = 0;
const imgTV171 = [];
imgTV171[0] = wayToDirWindow + '/TV 0711.jpg';
imgTV171[1] = wayToDirWindow + '/TV 0712.jpg';
imgTV171[2] = wayToDirWindow + '/TV 0713.jpg';
const imgTV172 = [];
imgTV172[0] = wayToDirWindow + '/TV 0721.jpg';
imgTV172[1] = wayToDirWindow + '/TV 0722.jpg';
imgTV172[2] = wayToDirWindow + '/TV 0723.jpg';
const imgTV173 = [];
imgTV173[0] = wayToDirWindow + '/TV 0731.jpg';
const imgTV170 = [[imgTV171], [imgTV172], [imgTV173]];

//6. preview
let index071 = 0;
let index072 = 0;
const imgPreview1 = [];
imgPreview1[0] = wayToDirPrev + '/preview 00.jpg';
imgPreview1[1] = wayToDirPrev + '/preview 01.jpg';
imgPreview1[2] = wayToDirPrev + '/preview 02.jpg';
imgPreview1[3] = wayToDirPrev + '/preview 03.jpg';
const imgPreview2 = [];
imgPreview2[0] = wayToDirPrev + '/preview 04.jpg';
imgPreview2[1] = wayToDirPrev + '/preview 05.jpg';
const imgPreview0 = [[imgPreview1[0]], [imgPreview2[0]], imgPreview2[1]];


//7. tv gid
let on = false;
let push = false;
let index08 = 0;
const imgTVGid0 = [];
imgTVGid0[0] = wayToDirTVGid + '/tv_gid 01.jpg';
imgTVGid0[1] = wayToDirTVGid + '/tv_gid 02.jpg';
let index081 = 0;
const imgTVGid1 = [];
imgTVGid1[0] = wayToDirTVGid + '/tv_gid 011.jpg';
imgTVGid1[1] = wayToDirTVGid + '/tv_gid 012.jpg';
imgTVGid1[2] = wayToDirTVGid + '/tv_gid 013.jpg';
let index0811 = 0;
const imgTVGid2 = [];
imgTVGid2[0] = wayToDirTVGid + '/tv_gid 0131.jpg';
imgTVGid2[1] = wayToDirTVGid + '/tv_gid 0132.jpg';


let index082 = 0;
const imgTVGid3 = [];
imgTVGid3[0] = wayToDirTVGid + '/tv_gid 021.jpg';
imgTVGid3[1] = wayToDirTVGid + '/tv_gid 022.jpg';
let index0ON82 = 0;
const imgTVGidON3 = [];
imgTVGidON3[0] = wayToDirTVGid + '/tv_gid_on 021.jpg';
imgTVGidON3[1] = wayToDirTVGid + '/tv_gid_on 022.jpg';

const imgTVGidON0 = [];
imgTVGidON0[0] = wayToDirTVGid + '/tv_gid 01.jpg';
imgTVGidON0[1] = wayToDirTVGid + '/tv_gid_on 02.jpg';

const imgTVGid31 = [];
imgTVGid31[0] = wayToDirTVGid + '/tv_gid 0211.jpg';
imgTVGid31[1] = wayToDirTVGid + '/tv_gid 0212.jpg';

const imgTVGid321 = [];
imgTVGid321[0] = wayToDirTVGid + '/tv_gid 0221.jpg';

function buttonDownUp(e) {
    switch (myPosition) {

        // 0. Главное меню
        case 0:
            index00 += 1 * e;
            if (index00 > imgMenu.length - 1) {
                index00 = 0;
            } else if (index00 < 0) {
                index00 = imgMenu.length - 1;
            }
            windowSimulation.src = imgMenu[index00];
            break;

        // 2. Родительский контроль
        case 2:
            index02 += 1 * e;
            if (index02 > imgHeadSettings11.length - 1) {
                index02 = 0;
            } else if (index02 < 0) {
                index02 = imgHeadSettings11.length - 1;
            }
            windowSimulation.src = imgHeadSettings11[index02];
            break;

        // 2.1 Родительский контроль - возраст
        case 21:
            index021 += 1 * e;
            if (index021 > imgHeadSettings111.length - 1) {
                index021 = 0;
            } else if (index021 < 0) {
                index021 = imgHeadSettings111.length - 1;
            }
            windowSimulation.src = imgHeadSettings111[index021];
            break;

        // 2.4 Родительский контроль - заблокированные каналы
        case 24:
            index024 += 1 * e;
            if (index024 > imgHeadSettings114.length - 1) {
                index024 = 0;
            } else if (index024 < 0) {
                index024 = imgHeadSettings114.length - 1;
            }
            windowSimulation.src = imgHeadSettings114[index024];
            break;


        // 3. Настройки системы
        case 3:
            index03 += 1 * e;
            if (index03 > imgSysSettings1.length - 1) {
                index03 = 0;
            } else if (index03 < 0) {
                index03 = imgSysSettings1.length - 1;
            }
            windowSimulation.src = imgSysSettings1[index03];
            break;

        // 3.1 Настройка системы - настройка интернет соединения
        case 31:
            index031 += 1 * e;
            if (index031 > imgSysSettings11.length - 1) {
                index031 = 0;
            } else if (index031 < 0) {
                index031 = imgSysSettings11.length - 1;
            }
            windowSimulation.src = imgSysSettings11[index031];
            break;

        // 3.4 Настройка системы - режим сна
        case 34:
            index034 += 1 * e;
            if (index034 > imgSysSettings14.length - 1) {
                index034 = 0;
            } else if (index034 < 0) {
                index034 = imgSysSettings14.length - 1;
            }
            windowSimulation.src = imgSysSettings14[index034];
            break;

        // 3.5 Настройка системы - настройка звука
        case 35:
            index035 += 1 * e;
            if (index035 > imgSysSettings15.length - 1) {
                index035 = 0;
            } else if (index035 < 0) {
                index035 = imgSysSettings15.length - 1;
            }
            windowSimulation.src = imgSysSettings15[index035];
            break;

        // 3.7 Настройка системы - субтитры
        case 37:
            index037 += 1 * e;
            if (index037 > imgSysSettings17.length - 1) {
                index037 = 0;
            } else if (index037 < 0) {
                index037 = imgSysSettings17.length - 1;
            }
            windowSimulation.src = imgSysSettings17[index037];
            break;

        // 3.8 Настройка системы - соотношение сторон экрана
        case 38:
            index038 += 1 * e;
            if (index038 > imgSysSettings18.length - 1) {
                index038 = 0;
            } else if (index038 < 0) {
                index038 = imgSysSettings18.length - 1;
            }
            windowSimulation.src = imgSysSettings18[index038];
            break;

        // 3.9 Настройка системы - сброс до ЗУ - ДА / НЕТ
        case 39:
            index039 += 1 * e;
            if (index039 > imgSysSettings19.length - 1) {
                index039 = 0;
            } else if (index039 < 0) {
                index039 = imgSysSettings19.length - 1;
            }
            windowSimulation.src = imgSysSettings19[index039];
            break;

        // 3.9. Настройка системы - сброс до ЗУ
        case 3921:
            index0392 += 1 * e;
            if (index0392 > imgSysSettings19111.length - 1) {
                index0392 = 0;
            } else if (index0392 < 0) {
                index0392 = imgSysSettings19111.length - 1;
            }
            windowSimulation.src = imgSysSettings19111[index0392];
            break;
        case 3922:
            index03922 += 1 * e;
            if (index03922 > imgSysSettings1911111.length - 1) {
                index03922 = 0;
            } else if (index03922 < 0) {
                index03922 = imgSysSettings1911111.length - 1;
            }
            windowSimulation.src = imgSysSettings1911111[index03922];
            break;
        case 39221:
            index0392211 += 1 * e;
            if (index0392211 > imgSysSettings19111111.length - 1) {
                index0392211 = 0;
            } else if (index0392211 < 0) {
                index0392211 = imgSysSettings19111111.length - 1;
            }
            windowSimulation.src = imgSysSettings19111111[index0392211];
            break;
        case 39222:
            index039222 += 1 * e;
            if (index039222 > imgSysSettings19111112.length - 1) {
                index039222 = 0;
            } else if (index039222 < 0) {
                index039222 = imgSysSettings19111112.length - 1;
            }
            windowSimulation.src = imgSysSettings19111112[index039222];
            break;
        case 392211:
            index03922111 += 1 * e;
            if (index03922111 > imgSysSettings191111112.length - 1) {
                index03922111 = 0;
            } else if (index03922111 < 0) {
                index03922111 = imgSysSettings191111112.length - 1;
            }
            windowSimulation.src = imgSysSettings191111112[index03922111];
            break;

        // Управление услугами
        case 4:
            index04 += 1 * e;
            if (index04 > imgService1.length - 1) {
                index04 = 0;
            } else if (index04 < 0) {
                index04 = imgService1.length - 1;
            }
            windowSimulation.src = imgService1[index04];
            break;

        // ГЛАВНАЯ
        case 5:
            index05 += 1 * e;
            if (index05 > imgStart.length - 1) {
                index05 = 0;
            } else if (index05 < 0) {
                index05 = imgStart.length - 1;
            }
            if (index05_gor !== 2 || index051_gor !== 1) {
                index05_gor = 2;
                index051_gor = 1;
            }
            windowSimulation.src = imgStart[index05];
            break;
        case 52:
            if (index052_gor === 0) {
                index052 += 1 * e;
                if (index052 > imgFavorites1.length - 1) {
                    index052 = 0;
                } else if (index052 < 0) {
                    index052 = imgFavorites1.length - 1;
                }
                windowSimulation.src = imgFavorites1[index052];
                break;
            }
            if (index052_gor === 1) {
                switch (index052) {
                    case 0:
                        index052 = 1;
                        index0522_gor = 0;
                        windowSimulation.src = imgFavorites21[0];
                        return;
                    case 1:
                        index052 = 0;
                        index0522_gor = 0;
                        windowSimulation.src = imgFavorites2[0];
                        return;
                }
            }
            break;
        case 60:
            index060 += 1 * e;
            if (index060 > imgTV0.length - 1) {
                index060 = 0;
            } else if (index060 < 0) {
                index060 = imgTV0.length - 1;
            }
            windowSimulation.src = imgTV0[index060];
            break;
        case 61:
        case 611:
            index0612 += 1 * e;
            if (index0612 > imgTV0161.length - 1) {
                index0612 = 0;
            } else if (index0612 < 0) {
                index0612 = imgTV0161.length - 1;
            }
            if (index0612 === 0) {
                windowSimulation.src = imgTV1[index061];
            }
            if (index0612 === 1) {
                windowSimulation.src = imgTV0161[1];
            }
            if (index0612 === 2) {
                windowSimulation.src = imgTV0161[2];
            }
            myPosition = 61;
            break;
        case 612:
            index067 += 1 * e;
            if (index067 > imgTV170.length - 1) {
                index067 = 0;
            } else if (index067 < 0) {
                index067 = imgTV170.length - 1;
            }
            if (index067 === 0) {
                windowSimulation.src = imgTV171[index0671];
            }
            if (index067 === 1) {
                windowSimulation.src = imgTV172[index0672];
            }
            if (index067 === 2) {
                windowSimulation.src = imgTV173[0];
            }
            break;
        case 7:
            index072 += 1 * e;
            if (index072 > imgPreview0.length - 1) {
                index072 = 0;
            } else if (index072 < 0) {
                index072 = imgPreview0.length - 1;
            }
            windowSimulation.src = imgPreview0[index072];
            break;
        case 81:
            index081 += 1 * e;
            if (index081 > imgTVGid1.length - 1) {
                index081 = 0;
            } else if (index081 < 0) {
                index081 = imgTVGid1.length - 1;
            }
            windowSimulation.src = imgTVGid1[index081];
            break;
        case 82:
            if (on === false) {
                index082 += 1 * e;
                if (index082 > imgTVGid3.length - 1) {
                    index082 = 0;
                } else if (index082 < 0) {
                    index082 = imgTVGid3.length - 1;
                }
                windowSimulation.src = imgTVGid3[index082];
            }
            if (on === true) {
                index082 += 1 * e;
                if (index082 > imgTVGidON3.length - 1) {
                    index082 = 0;
                } else if (index082 < 0) {
                    index082 = imgTVGidON3.length - 1;
                }
                windowSimulation.src = imgTVGidON3[index082];
            }
            break;
    }
}

function buttonLeft(e) {
    switch (myPosition) {
        case 1:
            windowSimulation.src = imgMenu[0];
            myPosition = 0;
            return;
        case 2:
        case 20:
            windowSimulation.src = imgMenu[1];
            myPosition = 0;
            return;
        case 3:
            windowSimulation.src = imgMenu[2];
            myPosition = 0;
            return;
        case 4:
            windowSimulation.src = imgMenu[3];
            myPosition = 0;
            return;
        case 11:
            windowSimulation.src = imgUserSettings[0];
            myPosition = 1;
            return;
        case 111:
            windowSimulation.src = imgUserSettings[0];
            myPosition = 1;
            return;

        case 21:
            windowSimulation.src = imgHeadSettings11[0];
            myPosition = 2;
            return;
        case 22:
        case 221:
        case 222:
            windowSimulation.src = imgHeadSettings11[1];
            index021 = 1;
            myPosition = 2;
            return;
        case 23:
            windowSimulation.src = imgHeadSettings11[2];
            index021 = 2;
            myPosition = 2;
            return;
        case 24:
            windowSimulation.src = imgHeadSettings11[3];
            index021 = 3;
            myPosition = 2;
            return;


        case 31:
            windowSimulation.src = imgSysSettings1[0];
            index031 = 0;
            myPosition = 3;
            return;
        case 311:
            windowSimulation.src = imgSysSettings11[1];
            index031 = 1;
            myPosition = 31;
            return;
        case 312:
            windowSimulation.src = imgSysSettings112[0];
            myPosition = 311;
            return;
        case 32:
            windowSimulation.src = imgSysSettings1[1];
            index031 = 1;
            myPosition = 3;
            return;
        case 33:
            windowSimulation.src = imgSysSettings1[2];
            index031 = 2;
            myPosition = 3;
            return;
        case 34:
            windowSimulation.src = imgSysSettings1[3];
            index031 = 3;
            myPosition = 3;
            return;
        case 35:
            windowSimulation.src = imgSysSettings1[4];
            index031 = 4;
            myPosition = 3;
            return;
        case 36:
            windowSimulation.src = imgSysSettings1[5];
            index031 = 5;
            myPosition = 3;
            return;
        case 37:
            windowSimulation.src = imgSysSettings1[6];
            index031 = 6;
            myPosition = 3;
            return;
        case 38:
            windowSimulation.src = imgSysSettings1[7];
            index031 = 7;
            myPosition = 3;
            return;
        case 39:
            windowSimulation.src = imgSysSettings1[8];
            index031 = 8;
            myPosition = 3;
            return;


        case 41:
            windowSimulation.src = imgService1[0];
            index04 = 0;
            myPosition = 4;
            return;
        case 42:
            windowSimulation.src = imgService1[1];
            index04 = 1;
            myPosition = 4;
            return;
        case 421:
            windowSimulation.src = imgService21[0];
            myPosition = 42;
            return;
        case 422:
            windowSimulation.src = imgService21[1];
            myPosition = 421;
            return;
        case 423:
            windowSimulation.src = imgService21[2];
            myPosition = 422;
            return;
        case 43:
            windowSimulation.src = imgService1[2];
            index04 = 2;
            myPosition = 4;
            return;
        case 431:
            windowSimulation.src = imgService31[0];
            myPosition = 43;
            return;

        case 5:
            if (index05 === 0) {
                index05_gor += 1 * e;
                if (index05_gor > imgStartGor.length - 1) {
                    index05_gor = 0;
                } else if (index05_gor < 0) {
                    index05_gor = imgStartGor.length - 1;
                }
                windowSimulation.src = imgStartGor[index05_gor];
                break;
            }
            if (index05 === 1) {
                index051_gor += 1 * e;
                if (index051_gor > imgStart2.length - 1) {
                    index051_gor = 0;
                } else if (index051_gor < 0) {
                    index051_gor = imgStart2.length - 1;
                }
                windowSimulation.src = imgStart2[index051_gor];
                break;
            }
    }
    if (index052 === 0) {
        switch (myPosition) {
            case 52:
                index052_gor = 0;
                windowSimulation.src = imgFavorites1[0];
                break;
        }
    }
    if (index0612 === 0) {
        switch (myPosition) {
            case 61:
                index061 += 1 * e;
                if (index061 > imgTV1.length - 1) {
                    index061 = 0;
                } else if (index061 < 0) {
                    index061 = imgTV1.length - 1;
                }
                windowSimulation.src = imgTV1[index061];
                break;
        }
    }
    if (index067 === 0) {
        switch (myPosition) {
            case 612:
                index0671 += 1 * e;
                if (index0671 > imgTV171.length - 1) {
                    index0671 = 0;
                } else if (index0671 < 0) {
                    index0671 = imgTV171.length - 1;
                }
                windowSimulation.src = imgTV171[index0671];
                break;
        }
    }
    if (index067 === 1) {
        switch (myPosition) {
            case 612:
                index0672 += 1 * e;
                if (index0672 > imgTV171.length - 1) {
                    index0672 = 0;
                } else if (index0672 < 0) {
                    index0672 = imgTV171.length - 1;
                }
                windowSimulation.src = imgTV172[index0672];
                break;
        }
    }
    if (index072 === 0) {
        switch (myPosition) {
            case 7:
                index071 += 1 * e;
                if (index071 > imgPreview1.length - 1) {
                    index071 = 0;
                } else if (index071 < 0) {
                    index071 = imgPreview1.length - 1;
                }
                windowSimulation.src = imgPreview1[index071];
                break;
        }
    }
    switch (myPosition) {
        case 8:
            if (on === false) {
                index08 += 1 * e;
                if (index08 > imgTVGid0.length - 1) {
                    index08 = 0;
                } else if (index08 < 0) {
                    index08 = imgTVGid0.length - 1;
                }
                windowSimulation.src = imgTVGid0[index08];
            }
            if (on === true) {
                index08 += 1 * e;
                if (index08 > imgTVGidON0.length - 1) {
                    index08 = 0;
                } else if (index08 < 0) {
                    index08 = imgTVGidON0.length - 1;
                }
                windowSimulation.src = imgTVGidON0[index08];
            }
            break;
        case 811:
            index0811 += 1 * e;
            if (index0811 > imgTVGid2.length - 1) {
                index0811 = 0;
            } else if (index0811 < 0) {
                index0811 = imgTVGid2.length - 1;
            }
            windowSimulation.src = imgTVGid2[index0811];
            break;
    }
}

function buttonRight(e) {
    if (myPosition === 0) {
        switch (index00) {
            case 0:
                windowSimulation.src = imgUserSettings[0];
                myPosition = 1;
                return;
            case 1:
                windowSimulation.src = imgHeadSettings1[0];
                myPosition = 20;
                return;
            case 2:
                windowSimulation.src = imgSysSettings1[0];
                myPosition = 3;
                return;
            case 3:
                windowSimulation.src = imgService1[0];
                myPosition = 4;
                return;
        }
    }

    if (index05 === 0) {
        switch (myPosition) {
            case 5:
                index05_gor += 1 * e;
                if (index05_gor > imgStartGor.length - 1) {
                    index05_gor = 0;
                } else if (index05_gor < 0) {
                    index05_gor = imgStartGor.length - 1;
                }
                windowSimulation.src = imgStartGor[index05_gor];
                break;
        }
    }
    switch (myPosition) {
        case 5:
            if (index05 === 1) {
                index051_gor += 1 * e;
                if (index051_gor > imgStart2.length - 1) {
                    index051_gor = 0;
                } else if (index051_gor < 0) {
                    index051_gor = imgStart2.length - 1;
                }
                windowSimulation.src = imgStart2[index051_gor];
                break;
            }
    }
    if (index052 === 0) {
        switch (myPosition) {
            case 52:
                index052_gor = 1;
                windowSimulation.src = imgFavorites2[0];
                break;
        }
    }
    if (index0612 === 0) {
        switch (myPosition) {
            case 61:
                index061 += 1 * e;
                if (index061 > imgTV1.length - 1) {
                    index061 = 0;
                } else if (index061 < 0) {
                    index061 = imgTV1.length - 1;
                }
                windowSimulation.src = imgTV1[index061];
                break;
        }
    }
    if (index067 === 0) {
        switch (myPosition) {
            case 612:
                index0671 += 1 * e;
                if (index0671 > imgTV171.length - 1) {
                    index0671 = 0;
                } else if (index0671 < 0) {
                    index0671 = imgTV171.length - 1;
                }
                windowSimulation.src = imgTV171[index0671];
                break;
        }
    }
    if (index067 === 1) {
        switch (myPosition) {
            case 612:
                index0672 += 1 * e;
                if (index0672 > imgTV171.length - 1) {
                    index0672 = 0;
                } else if (index0672 < 0) {
                    index0672 = imgTV171.length - 1;
                }
                windowSimulation.src = imgTV172[index0672];
                break;
        }
    }
    if (index072 === 0) {
        switch (myPosition) {
            case 7:
                index071 += 1 * e;
                if (index071 > imgPreview1.length - 1) {
                    index071 = 0;
                } else if (index071 < 0) {
                    index071 = imgPreview1.length - 1;
                }
                windowSimulation.src = imgPreview1[index071];
                break;
        }
    }
    switch (myPosition) {
        case 8:
            if (on === false) {
                index08 += 1 * e;
                if (index08 > imgTVGid0.length - 1) {
                    index08 = 0;
                } else if (index08 < 0) {
                    index08 = imgTVGid0.length - 1;
                }
                windowSimulation.src = imgTVGid0[index08];
            }
            if (on === true) {
                index08 += 1 * e;
                if (index08 > imgTVGidON0.length - 1) {
                    index08 = 0;
                } else if (index08 < 0) {
                    index08 = imgTVGidON0.length - 1;
                }
                windowSimulation.src = imgTVGidON0[index08];
            }
            break;
        case 811:
            index0811 += 1 * e;
            if (index0811 > imgTVGid2.length - 1) {
                index0811 = 0;
            } else if (index0811 < 0) {
                index0811 = imgTVGid2.length - 1;
            }
            windowSimulation.src = imgTVGid2[index0811];
            break;
    }
}

function buttonOk() {
    // 0. Главное меню - выбор раздела
    if (myPosition === 0) {
        switch (index00) {
            case 0:
                windowSimulation.src = imgUserSettings[0];
                myPosition = 1;
                return;
            case 1:
                windowSimulation.src = imgHeadSettings1[0];
                myPosition = 20;
                return;
            case 2:
                windowSimulation.src = imgSysSettings1[0];
                myPosition = 3;
                return;
            case 3:
                windowSimulation.src = imgService1[0];
                myPosition = 4;
                return;
        }
    }

    // 1. Пользовательские настройки
    switch (myPosition) {
        case 1:
            windowSimulation.src = imgUserSettings[1];
            myPosition = 11;
            return;
        case 11:
            windowSimulation.src = imgUserSettings[2];
            myPosition = 111;
            return;
        case 111:
            windowSimulation.src = imgPreview1[0];
            myPosition = 7;
            return;
    }

    // 2. Родительский контроль
    // 2.0 Родительский контроль - пин код
    switch (myPosition) {
        case 20:
            windowSimulation.src = imgHeadSettings11[0];
            myPosition = 2;
            return;
    }
    // 2.0 Родительский контроль
    if (myPosition === 2) {
        switch (index02) {
            case 0:
                windowSimulation.src = imgHeadSettings111[0];
                myPosition = 21;
                return;
            case 1:
                windowSimulation.src = imgHeadSettings112[0];
                myPosition = 22;
                return;
            case 2:
                windowSimulation.src = imgHeadSettings113[0];
                myPosition = 23;
                return;
            case 3:
                windowSimulation.src = imgHeadSettings114[0];
                myPosition = 24;
                return;
        }
    }
    // 2.1 Родительский контроль - выбор возраста
    if (myPosition === 21) {
        switch (index021) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                windowSimulation.src = imgHeadSettings11[0];
                myPosition = 2;
                index021 = 0;
                return;
        }
    }
    // 2.2-4 Родительский контроль
    switch (myPosition) {
        // 2.2 Родительский контроль - смена пинкода
        case 22:
            windowSimulation.src = imgHeadSettings112[1];
            myPosition = 221;
            return;
        case 221:
            windowSimulation.src = imgHeadSettings112[2];
            myPosition = 222;
            return;
        case 222:
            windowSimulation.src = imgHeadSettings11[1];
            myPosition = 2;
            index02 = 1;
            return;
        // 2.3 Родительский контроль - подтверждение пин кодом
        case 23:
            windowSimulation.src = imgHeadSettings11[2];
            myPosition = 2;
            index02 = 2;
            return;
        // 2.4 Родительский контроль - заблокированные каналы
        case 24:
            if (index024 === 1) {
                windowSimulation.src = imgHeadSettings11[3];
                myPosition = 2;
                index02 = 3;
            }
            return;
    }

    // 3. Системные настройки
    if (myPosition === 3) {
        switch (index03) {
            case 0:
                windowSimulation.src = imgSysSettings11[0];
                myPosition = 31;
                return;
            case 1:
                windowSimulation.src = imgSysSettings12[0];
                myPosition = 32;
                return;
            case 2:
                windowSimulation.src = imgSysSettings13[0];
                myPosition = 33;
                return;
            case 3:
                windowSimulation.src = imgSysSettings14[0];
                myPosition = 34;
                return;
            case 4:
                windowSimulation.src = imgSysSettings15[0];
                myPosition = 35;
                return;
            case 5:
                windowSimulation.src = imgSysSettings16[0];
                myPosition = 36;
                return;
            case 6:
                windowSimulation.src = imgSysSettings17[0];
                myPosition = 37;
                return;
            case 7:
                windowSimulation.src = imgSysSettings18[0];
                myPosition = 38;
                return;
            case 8:
                windowSimulation.src = imgSysSettings19[0];
                myPosition = 39;
                return;
        }
    }
    // 3.1 Системные настройки - настройка интернета
    if (myPosition === 31) {
        switch (index031) {
            case 0:
            case 2:
                windowSimulation.src = imgSysSettings1[0];
                myPosition = 3;
                index03 = 0;
                index031 = 0;
                return;
            // 3.1.1 Системные настройки - настройка wifi
            case 1:
                windowSimulation.src = imgSysSettings112[0];
                myPosition = 311;
                return;
        }
    }
    // 3.1.2 Системные настройки - настройка wifi
    switch (myPosition) {
        case 311:
            windowSimulation.src = imgSysSettings112[1];
            myPosition = 312;
            return;
        case 312:
            windowSimulation.src = imgSysSettings1[0];
            myPosition = 3;
            index03 = 0;
            index031 = 0;
            return;
    }
    // 3.2-3 Системные настройки
    switch (myPosition) {
        // 3.2 Системные настройки - Обновления
        case 32:
            windowSimulation.src = imgSysSettings1[1];
            myPosition = 3;
            index03 = 1;
            return;
        // 3.3 Системные настройки - техинфо
        case 33:
            windowSimulation.src = imgSysSettings1[2];
            myPosition = 3;
            index03 = 2;
            return;
    }
    // 3.4 Системные настройки - настройка сна
    if (myPosition === 34) {
        switch (index034) {
            case 0:
            case 1:
            case 2:
            case 3:
                windowSimulation.src = imgSysSettings1[3];
                myPosition = 3;
                index03 = 3;
                index034 = 0;
                return;
        }
    }
    // 3.5 Системные настройки - настройка звука
    if (myPosition === 35) {
        switch (index035) {
            case 0:
            case 1:
            case 2:
                windowSimulation.src = imgSysSettings1[4];
                myPosition = 3;
                index03 = 4;
                index035 = 0;
                return;
        }
    }
    // 3.6 Системные настройки - громкость
    switch (myPosition) {
        case 36:
            windowSimulation.src = imgSysSettings1[5];
            myPosition = 3;
            index03 = 5;
            return;
    }
    // 3.7 Системные настройки - субтитры
    if (myPosition === 37) {
        switch (index037) {
            case 0:
            case 1:
            case 2:
                windowSimulation.src = imgSysSettings1[6];
                myPosition = 3;
                index03 = 6;
                index037 = 0;
                return;
        }
    }
    // 3.8 Системные настройки - соотношение сторон экрана
    if (myPosition === 38) {
        switch (index038) {
            case 0:
            case 1:
                windowSimulation.src = imgSysSettings1[7];
                myPosition = 3;
                index03 = 7;
                index037 = 0;
                return;
        }
    }
    // 3.9 Системные настройки - сброс до ЗУ
    if (myPosition === 39) {
        switch (index039) {
            case 0:
                windowSimulation.src = imgSysSettings191[0];
                myPosition = 391;
                index039 = 0;
                return;
            case 1:
                windowSimulation.src = imgSysSettings1[8];
                myPosition = 3;
                index03 = 8;
                index039 = 0;
                return;
        }
    }
    switch (myPosition) {
        case 391:
            windowSimulation.src = imgSysSettings191[1];
            myPosition = 392;
            return;
        case 392:
            windowSimulation.src = imgSysSettings19111[0];
            myPosition = 3921;
            return;
        case 39211:
            windowSimulation.src = imgSysSettings1911111[0];
            myPosition = 3922;
            return;
        case 39212:
            windowSimulation.src = imgSysSettings191112[1];
            myPosition = 392121;
            return;
        case 392121:
            windowSimulation.src = imgSysSettings191112[2];
            myPosition = 392122;
            return;
        case 392122:
            windowSimulation.src = imgSysSettings191111[0];
            myPosition = 39211;
            return;
    }
    if (myPosition === 3921) {
        switch (index0392) {
            case 2:
            case 0:
                windowSimulation.src = imgSysSettings191111[0];
                myPosition = 39211;
                return;
            case 1:
                windowSimulation.src = imgSysSettings191112[0];
                myPosition = 39212;
                return;
        }
    }
    if (myPosition === 3922) {
        switch (index03922) {
            case 0:
                windowSimulation.src = imgSysSettings19111111[0];
                myPosition = 39221;
                return;
            case 1:
                windowSimulation.src = imgSysSettings19111112[0];
                myPosition = 39222;
                return;
        }
    }
    if (myPosition === 39221) {
        switch (index0392211) {
            case 0:
                windowSimulation.src = imgStart[1];
                index05 = 1;
                myPosition = 5;
                return;
            case 1:
                windowSimulation.src = imgSysSettings191111112[0];
                myPosition = 392211;
                return;
        }
    }
    if (myPosition === 392211) {
        switch (index03922111) {
            case 0:
                windowSimulation.src = imgSysSettings19111[0];
                index0392 = 0;
                myPosition = 3921;
                return;
            case 1:
                windowSimulation.src = imgSysSettings19111111[0];
                myPosition = 39221;
                index03922111 = 0;
                index0392211 = 0;
                return;
        }
    }
    if (myPosition === 39222) {
        switch (index039222) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                windowSimulation.src = imgSysSettings1911111[0];
                myPosition = 3922;
                index039222 = 0;
                index03922 = 0;
                return;
        }
    }

    // 4. Усправление услугами
    if (myPosition === 4) {
        switch (index04) {
            case 0:
                windowSimulation.src = imgService11[0];
                myPosition = 41;
                return;
            case 1:
                windowSimulation.src = imgService21[0];
                myPosition = 42;
                return;
            case 2:
                windowSimulation.src = imgService31[0];
                myPosition = 43;
                return;
        }
    }
    switch (myPosition) {
        case 41:
            windowSimulation.src = imgService1[0];
            myPosition = 4;
            return;
        case 42:
            windowSimulation.src = imgService21[1];
            myPosition = 421;
            return;
        case 421:
            windowSimulation.src = imgService21[2];
            myPosition = 422;
            return;
        case 422:
            windowSimulation.src = imgService21[3];
            myPosition = 423;
            return;
        case 423:
            windowSimulation.src = imgService1[1];
            myPosition = 4;
            index04 = 1;
            return;
        case 43:
            windowSimulation.src = imgService31[1];
            myPosition = 431;
            return;
        case 431:
            windowSimulation.src = imgService1[2];
            myPosition = 4;
            index04 = 2;
            return;
    }

    // 5. main
    if (myPosition === 5 && index05 === 0) {
        switch (index05_gor) {
            case 0:
                windowSimulation.src = imgFavorites1[0];
                myPosition = 52;
                return;
            case 1:
                windowSimulation.src = imgMenu[0];
                myPosition = 0;
                return;
            case 2:
                windowSimulation.src = imgSearch[0];
                myPosition = 51;
                return;
        }
    }
    if (myPosition === 5 && index051_gor === 1) {
        switch (index05) {
            case 1:
                windowSimulation.src = imgTV0[0];
                myPosition = 60;
                return;
            case 11:
                windowSimulation.src = imgFavorites1[0];
                myPosition = 52;
                return;
        }
    }
    if (myPosition === 60) {
        switch (index060) {
            case 0:
            case 1:
                windowSimulation.src = imgTV1[3];
                index061 = 3;
                myPosition = 61;
                return;
        }
    }
    if (myPosition === 5) {
        switch (index051_gor) {
            case 0:
                windowSimulation.src = imgTVGid0[0];
                myPosition = 8;
                push = true;
                return;
        }
    }
    switch (myPosition) {
        case 611:
            windowSimulation.src = imgTV1[6];
            myPosition = 61;
            return;
    }
    if (myPosition === 61) {
        switch (index061) {
            case 0:
                windowSimulation.src = imgStart[1];
                myPosition = 5;
                index061 = 3;
                return;
            case 1:
                windowSimulation.src = imgTVGid0[0];
                myPosition = 8;
                push = false;
                return;
            case 6:
                windowSimulation.src = imgTV16[0];
                myPosition = 611;
                return;
            case 7:
                windowSimulation.src = imgTV171[0];
                myPosition = 612;
                return;
        }
    }
    if (myPosition === 612) {
        switch (index067) {
            case 2:
                windowSimulation.src = imgTV1[7];
                index061 = 7;
                myPosition = 61;
                return;
        }
    }
    if (myPosition === 8) {
        switch (index08) {
            case 0:
                windowSimulation.src = imgTVGid1[0];
                myPosition = 81;
                return;
            case 1:
                if (on === false) {
                    windowSimulation.src = imgTVGid3[0];
                }
                if (on === true) {
                    windowSimulation.src = imgTVGidON3[0];
                }
                myPosition = 82;
                return;
        }
    }
    if (myPosition === 81) {
        switch (index081) {
            case 0:
            case 1:
                windowSimulation.src = imgTV1[3];
                myPosition = 61;
                index061 = 3;
                index0811 = 0;
                return;
            case 2:
                windowSimulation.src = imgTVGid2[0];
                myPosition = 811;
                return;
        }
    }
    if (myPosition === 82) {
        switch (index082) {
            case 0:
                if (on === false) {
                    windowSimulation.src = imgTVGid31[0];
                    setTimeout(function () {
                        windowSimulation.src = imgTVGidON0[1];
                        myPosition = 8;
                        index08 = 1;
                        on = true;
                    }, 1500)
                }
                if (on === true) {
                    windowSimulation.src = imgTVGid31[1];
                    setTimeout(function () {
                        windowSimulation.src = imgTVGid0[1];
                        myPosition = 8;
                        index08 = 1;
                        on = false;
                    }, 1500)
                }
                return;
            case 1:
                windowSimulation.src = imgTVGid321[0];
                myPosition = 821;
                index082 = 0;
                return;
        }
    }
    if (myPosition === 811) {
        switch (index0811) {
            case 0:
            case 1:
                windowSimulation.src = imgTV1[3];
                myPosition = 61;
                index061 = 3;
                index0811 = 0;
                return;
        }
    }
}

function buttonBack() {
    switch (myPosition) {
        case 0:
            myPosition = 5;
            index05 = 0;
            index05_gor = 1;
            index051_gor = 1;
            windowSimulation.src = imgStartGor[1];
            return;
        case 1:
            windowSimulation.src = imgMenu[0];
            myPosition = 0;
            return;
        case 2:
        case 20:
            windowSimulation.src = imgMenu[1];
            myPosition = 0;
            return;
        case 21:
        case 22:
        case 23:
        case 24:
        case 221:
            windowSimulation.src = imgHeadSettings11[0];
            index02 = 0;
            myPosition = 2;
            return;
        case 3:
            windowSimulation.src = imgMenu[2];
            myPosition = 0;
            return;
        case 31:
        case 312:
            windowSimulation.src = imgSysSettings1[0];
            myPosition = 3;
            index03 = 0;
            return;
        case 34:
            windowSimulation.src = imgSysSettings1[3];
            myPosition = 3;
            index03 = 3;
            return;
        case 35:
            windowSimulation.src = imgSysSettings1[4];
            myPosition = 3;
            index03 = 4;
            return;
        case 36:
            windowSimulation.src = imgSysSettings1[5];
            myPosition = 3;
            index03 = 5;
            return;
        case 37:
            windowSimulation.src = imgSysSettings1[6];
            myPosition = 3;
            index03 = 6;
            return;
        case 38:
            windowSimulation.src = imgSysSettings1[7];
            myPosition = 3;
            index03 = 7;
            return;
        case 39:
            windowSimulation.src = imgSysSettings1[8];
            myPosition = 3;
            index03 = 8;
            return;
        case 392121:
            windowSimulation.src = imgSysSettings19111[0];
            myPosition = 3921;
            index0392 = 0;
            return;
        case 392122:
            windowSimulation.src = imgSysSettings191112[1];
            myPosition = 392121;
            index0392 = 0;
            return;
        case 39222:
            windowSimulation.src = imgSysSettings1911111[0];
            myPosition = 3922;
            index03922 = 0;
            return;
        case 4:
            windowSimulation.src = imgMenu[3];
            myPosition = 0;
            return;
        case 41:
            windowSimulation.src = imgService1[0];
            index04 = 0;
            myPosition = 4;
            return;
        case 42:
            windowSimulation.src = imgService1[1];
            index04 = 1;
            myPosition = 4;
            return;
        case 421:
            windowSimulation.src = imgService21[0];
            myPosition = 42;
            return;
        case 422:
            windowSimulation.src = imgService21[1];
            myPosition = 421;
            return;
        case 423:
            windowSimulation.src = imgService21[2];
            myPosition = 422;
            return;
        case 43:
            windowSimulation.src = imgService1[2];
            index04 = 2;
            myPosition = 4;
            return;
        case 431:
            windowSimulation.src = imgService31[0];
            myPosition = 43;
            return;
        case 7:
            windowSimulation.src = imgUserSettings[2];
            myPosition = 111;
            return;
        case 6:
        case 60:
        case 61:
            myPosition = 5;
            index05 = 1;
            index05_gor = 2;
            index051_gor = 1;
            windowSimulation.src = imgStart[1];
            return;
        case 612:
            windowSimulation.src = imgTV1[7];
            index061 = 7;
            myPosition = 61;
            return;
        case 8:
            if (push === false) {
                windowSimulation.src = imgTV1[1];
                index061 = 1;
                myPosition = 61;
            } else {
                myPosition = 5;
                index05 = 1;
                index05_gor = 2;
                index051_gor = 1;
                windowSimulation.src = imgStart[1];
            }
            return;
        case 11:
            windowSimulation.src = imgUserSettings[0];
            myPosition = 1;
            return;
        case 111:
            windowSimulation.src = imgUserSettings[0];
            myPosition = 1;
            return;


        case 51:
            myPosition = 5;
            index05 = 0;
            index05_gor = 2;
            index051_gor = 1;
            windowSimulation.src = imgStartGor[2];
            return;
        case 52:
            myPosition = 5;
            index05 = 1;
            index05_gor = 2;
            index051_gor = 1;
            windowSimulation.src = imgStart[1];
            return;
    }
}
function tvgid() {
    if (myPosition !== 8) {
        windowSimulation.src = imgTVGid0[0];
        index08 = 0;
        myPosition = 8;
        push = true;
    }
}
function check() {
    console.log(myPosition)
}
