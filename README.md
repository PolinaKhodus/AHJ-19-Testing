# AHJ-19-Testing
 [![Build status](https://ci.appveyor.com/api/projects/status/1eerkb082hgrgp9p?svg=true)](https://ci.appveyor.com/project/PolinaKhodus/ahj-19-testing)
 https://polinakhodus.github.io/AHJ-19-Testing/
Credit Card Validator
Легенда
Вам пришла задача: сделать виджет, позволяющий вводить номер карты (можете в качестве общего развития почитать про PCI DSS).

Общий вид виджета должен выглядеть следующим образом:



Скриншот взят с сайта http://www.validcreditcardnumber.com.

Вам нужно провести исследовательскую работу и выяснить - на базе чего определяется, какой платёжной системе принадлежит определённая карта (не забудьте про "Мир").

Описание
Используйте следующий алгоритм для проверки валидности номера карты.

Изображения для карт необходимо найти самостоятельно (помните, про авторские права и недопустимость нелегального использования). Обычно информацию об использованных изображениях размещают в файле licenses.txt и кладут в корень сайта (настройте для этого соответствующим образом Webpack).

Разделите логику проверки номера карты, выяснения принадлежности определённой платёжной системе и взаимодействия с DOM.

Напишите авто-тесты на функции проверки номера карты и принадлежности определённой платёжной системе.

В качестве источника номеров карт используйте сервис FreeFormatter.

Удостоверьтесь, что всё работает при прогоне тестов в Appveyor.

Подсказка