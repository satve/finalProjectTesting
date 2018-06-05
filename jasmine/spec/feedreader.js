 $(function () {

     describe('RSS Feeds', function () {

         it('are defined', function () {
             expect(allFeeds).toBeDefined();
             expect(allFeeds.length).not.toBe(0);
         });

         it('eachFeeds has a UrL defined', function () {
             allFeeds.forEach(function (eachFeed) {
                 expect(eachFeed.url).toBeDefined();
                 expect(eachFeed.url.length).not.toBe(0);
             });
         });

         it('eachFeeds has a name defined', function () {
             allFeeds.forEach(function (eachFeed) {
                 expect(eachFeed.name).toBeDefined();
                 expect(eachFeed.name.length).not.toBe(0);
             });
         });
     });

     //Write a new test suite named "The menu" 
     describe('The menu', function () {
         it('should be hidden menu element by default', function () {
             expect(document.querySelector('body').getAttribute('menu-hidden')).toBeDefined();
         });

         it('should changes visibility when the menu icon is clicked', function () {
             document.querySelector('.menu-icon-link').click();
             expect(document.querySelector('body').querySelector('.menu-hidden')).toBeDefined(16);
             expect(document.querySelector('body').querySelector('.menu-hidden')).toBeDefined();
         });
     });

     // a new test suite named "Initial Entries" 
     // Write a test that ensures when the loadFeed function is called and completes its work, there is at leasta single .
     describe('Initial Entries', function () {
         beforeEach(function (done) {
             loadFeed(1, done);
         });

         it('should be at least single element when LoadFeed function called and completes its work', function () {
             expect(document.querySelector('.feed .entry').length).not.toBe(0);
         });
     });

     //Write a new test suite named "New Feed Selection" 
     describe('New Feed Selection', function () {
         beforeEach(function (done) {
             loadFeed(1, function () {
                 done();
             });
         });
     });

     it('should change content when new feed is loaded by LoadFeed function', function () {
         expect(document.querySelector('.feed')).not.toBe();
     });
 }());