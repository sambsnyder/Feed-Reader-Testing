
$(function() {
		describe('RSS Feeds', function() {
				 it('are defined', function() {
					 // expect all feeds to not be null
					 expect(allFeeds).toBeDefined();
					 // if length is 0 feeds are empty
					 expect(allFeeds.length).not.toBe(0);
        });
				 // for each fo the elements in the feeds
				 // check if url is null or empty
				 it('has URL', function() {
					 allFeeds.forEach(function(element){
						 expect(element.url).toBeDefined();
						 expect(element.url.length).not.toBe(0);
					 });
				 });
				 // for each fo the element in the feeds
				 // check if name is null or empty
				 it('has name', function() {
					 allFeeds.forEach(function(element){
						 expect(element.name).toBeDefined();
						 expect(element.name.length).not.toBe(0);
					 });
				 });
    });

		describe('The menu', function() {
			// check if the body has menu hidden class on load
			it('hidden by default', function () {
				expect($('body').hasClass('menu-hidden')).toBe(true);
			});
			// trigger the menu click and check if the class is properly toggled
			it('displays correctly on click', function () {
				$('a.menu-icon-link').trigger('click');
				expect($('body').hasClass('menu-hidden')).toBe(false);
				$('a.menu-icon-link').trigger('click');
				expect($('body').hasClass('menu-hidden')).toBe(true);
			});
		});
		
		describe('Initial Entries', function() {
			// before the test, need to call loadFeed so we can check for entries
			beforeEach(function(done) {
				loadFeed(0,done);
			});
			// make sure feed has .entry elements
			it('has at least 1 .entry element', function () {
				expect($('.feed .entry').length).toBeGreaterThan(0);
			});
		});

		describe('New Feed Selection', function() {
				 // var for the previous feed
				 var prevFeed;
				 // before each feed is loaded, need to store the previous feed
				 // when we are done call load feed with done
				 beforeEach(function(done) {
					 loadFeed(0, function() {
						 prevFeed = $('.feed').html();
						 loadFeed(1, done);
					 });
				 });
				 // test to see if the feed is the same as the previous
				 it('has been updated', function() {
					 expect($('.feed').html()).not.toBe(prevFeed );
				 });
			 });
}());
