$(function () {

    $(document).ready(function () {
        let lastClicked = null;


        $(document).ready(function () {
            $('.sidebar__burger').click(function () {
                $('.sidebar__inner').addClass('sidebar--open'); // Показываем сайдбар
                $(this).hide(); // Прячем бургер
            });
    
            $(document).click(function (event) {
                // Проверяем, был ли клик за пределами бургера и сайдбара
                if (!$(event.target).closest('.sidebar__burger').length && !$(event.target).closest('.sidebar__inner').length) {
                    $('.sidebar__inner').removeClass('sidebar--open'); // Прячем сайдбар
                    $('.sidebar__burger').show(); // Показываем бургер
                }
            });
        });




        $('.imitators__img').click(function (event) {
            if (lastClicked) {
                // Удаляем класс у последнего нажатого элемента
                $(lastClicked).removeClass('imitators__img--open');
            }

            // Проверяем, кликнули ли мы по тому же элементу
            if (lastClicked === this) {
                // Удаляем класс, если кликнули по тому же элементу
                lastClicked = null; // Обнуляем lastClicked
            } else {
                // Добавляем класс к текущему элементу
                $(this).addClass('imitators__img--open');
                lastClicked = this; // Запоминаем текущий элемент
            }

            // Останавливаем всплытие события, чтобы клики по элементам не инициировали другие действия
            event.stopPropagation();
        });

        // Клик где-то вне элементов .imitators__img, чтобы убрать класс
        $(document).click(function () {
            if (lastClicked) {
                $(lastClicked).removeClass('imitators__img--open');
                lastClicked = null; // Обнуляем lastClicked
            }
        });
    });

})