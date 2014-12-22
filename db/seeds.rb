# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
Category.create!( name: "Art" )
Category.create!( name: "Comics" )
Category.create!( name: "Crafts" )
Category.create!( name: "Dance" )
Category.create!( name: "Design" )
Category.create!( name: "Fashion" )
Category.create!( name: "Film & Video" )
Category.create!( name: "Food" )
Category.create!( name: "Games" )
Category.create!( name: "Journalism" )
Category.create!( name: "Music" )
Category.create!( name: "Photography" )
Category.create!( name: "Publishing" )
Category.create!( name: "Technology" )
Category.create!( name: "Theater" )

User.create( name: "Guest", password: "123")

user1 = User.create!( name: "Joe Bitcoiner", password: "123")
user2 = User.create!( name: "Artsy Jane", password: "123")
user3 = User.create!( name: "Art Traveler", password: "123")
user4 = User.create!( name: "Mr. Packrat", password: "123")
user5 = User.create!( name: "Comic Book Guy", password: "123")
user6 = User.create!( name: "Super Hayek", password: "123")

project1 = user1.projects.create!( title: "Art International", blurb: "Online art gallery that sells internationally with Bitcoin.", goal_amount: 1000, end_date: "2015-06-01", category_id: 1, img_url: "http://thehoneycombers.com/singapore/wp-content/uploads/sites/2/2014/02/Bitcoin-2-640x480.jpg")
user2.projects.create!( title: "Artists R Us", blurb: "A workshop that rents out space to artists and hosts classes.", goal_amount: 2000, end_date: "2015-02-15", category_id: 1, img_url: "http://greycoder.com/wp-content/uploads/2012/10/bitcoin-money-smaller.jpg")
user3.projects.create!( title: "Super Scouts", blurb: "We travel the world in search of new talent to mentor.", goal_amount: 500, end_date: "2015-04-01", category_id: 1, img_url: "http://thebitcoinmovement.com/wp-content/uploads/2014/09/precious-bitcoin.png")
user4.projects.create!( title: "Wonder Supplies", blurb: "Need art supplies?  We've got you covered.",goal_amount: 1000, end_date: "2015-01-1", category_id: 1, img_url: "http://cdn.nextshark.com/wp-content/uploads/2014/04/bitcoin-mining-is-not-dead-start-e1397261391537.jpg")
user5.projects.create!( title: "BTComics", blurb: "Online trading site for classic comics.", goal_amount: 1500, end_date: "2015-06-15", category_id: 2, img_url: "http://cdn.nextshark.com/wp-content/uploads/2014/04/bitcoin-mining-is-not-dead-start-e1397261391537.jpg")
user6.projects.create!( title: "SuperHero Factory", blurb: "The hottest new company in the graphic novel world.", goal_amount: 2000, end_date: "2015-02-11", category_id: 2, img_url: "http://greycoder.com/wp-content/uploads/2012/10/bitcoin-money-smaller.jpg")

project1.pledges.create!( amount: 10, delivery_date: "2016-01-01", details: "Become a silent partner!")
project1.pledges.create!( amount: 50, delivery_date: "2016-01-01", details: "Want to be more involved?  Become a voting patner, today!")
project1.pledges.create!( amount: 100, delivery_date: "2016-01-01", details: "Join the Board of Directors.")
project1.pledges.create!( amount: 501, delivery_date: "2016-01-01", details: "Take control of the company.")
end