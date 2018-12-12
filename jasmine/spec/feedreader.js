/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loop through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        function isURLDefined(feed) {
          it('should have url defined', function () {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).toBeGreaterThan(0);
          });
        }

        for(eachFeed of allFeeds) {
          isURLDefined(eachFeed);
        }

        /* loop through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         function isNameDefined(feed) {
           it('should have name defined', function () {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).toBeGreaterThan(0);
           });
         }

         for(eachFeed of allFeeds) {
           isNameDefined(eachFeed);
         }
    });


const menu = function() {
  describe('The Menu', function() {
        /* test that the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
           expect(document.body).toHaveClass('menu-hidden');
});
        /* test that the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

 const hamburger = document.querySelector('.menu-icon-link');

         it('displays when menu icon is clicked, hides when clicked again', function() {
           console.log(hamburger);
           hamburger.click();
           expect(document.body).not.toHaveClass('menu-hidden');
           hamburger.click();
           expect(document.body).toHaveClass('menu-hidden');
         });
});
};

menu();

const initialEntries = function() {
  describe('Initial Entries', function() {
    /* test that when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
     beforeEach(function(done){
       loadFeed(0, done);
       });
     });

     it('contains at least one blog post', function () {
       const grabAnEntry = document.querySelectorAll('.feed .entry');
       expect(grabAnEntry).length.toBeGreaterThan(0);
     });
};
initialEntries();


const newFeedSelection = function() {
  let initialFeedText;
  let updatedFeedText;

  describe('New Feed Selection', function () {

    beforeEach(function (done) {
      //load feed is a callback to avoid running both loadFeeds at once and returning undefined
      //load first feed and get innerText
      loadFeed(0, function () {
        initialFeedText = document.querySelector('.feed').innerText;
      });

      //load last feed and get inner text
      loadFeed((allFeeds.length-1), function() {
        updatedFeedText = document.querySelector('.feed').innerText;
        done();
      });
    });

  it('changes content when a new feed is loaded', function () {
    expect(initialFeedText).not.toEqual(updatedFeedText);
  });

});
}
newFeedSelection();


}());
