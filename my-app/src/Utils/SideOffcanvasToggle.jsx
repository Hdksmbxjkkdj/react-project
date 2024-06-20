export const SideOffcanvasToggle = (selectbtn, openElement) => {
    window?.$('body').on('click', selectbtn, function (e) {
        e.preventDefault();
        var $this = window?.$(this),
            wrapp = window?.$this.parents('body'),
            wrapMask = window?.$('<div / >').addClass('closeMask'),
            cartDropdown = window?.$(openElement);

        if (!(cartDropdown).hasClass('open')) {
            wrapp.addClass('open');
            cartDropdown.addClass('open');
            cartDropdown.parent().append(wrapMask);
            wrapp.css({
                'overflow': 'hidden'
            });

        } else {
            removeSideMenu();
        }

        function removeSideMenu() {
            wrapp.removeAttr('style');
            wrapp.removeClass('open').find('.closeMask').remove();
            cartDropdown.removeClass('open');
        }

        window?.$('.sidebar-close, .closeMask').on('click', function () {
            removeSideMenu();
        });

    });
}