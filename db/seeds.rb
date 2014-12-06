# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
category = Category.create!( name: "Art" )
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

user = User.create!( name: "Asher", password: "123")

project = user.projects.create!( title: "Awesome Bitoin Miner", goal_amount: 1000, end_date: "2015-02-11", category: category, img_url: "http://thehoneycombers.com/singapore/wp-content/uploads/sites/2/2014/02/Bitcoin-2-640x480.jpg")
user.projects.create!( title: "Another Bitoin Miner", goal_amount: 2000, end_date: "2015-02-11", category: category, img_url: "http://greycoder.com/wp-content/uploads/2012/10/bitcoin-money-smaller.jpg")
user.projects.create!( title: "Some other project", goal_amount: 500, end_date: "2015-01-01", category: category, img_url: "http://thebitcoinmovement.com/wp-content/uploads/2014/09/precious-bitcoin.png")
user.projects.create!( title: "More projects", goal_amount: 1000, end_date: "2015-02-11", category: category, img_url: "http://cdn.nextshark.com/wp-content/uploads/2014/04/bitcoin-mining-is-not-dead-start-e1397261391537.jpg")
user.projects.create!( title: "I'm not very creative", goal_amount: 2000, end_date: "2015-02-11", category: category, img_url: "http://cdn.nextshark.com/wp-content/uploads/2014/04/bitcoin-mining-is-not-dead-start-e1397261391537.jpg")
user.projects.create!( title: "This is a repeat", goal_amount: 2000, end_date: "2015-02-11", category: category, img_url: "http://greycoder.com/wp-content/uploads/2012/10/bitcoin-money-smaller.jpg")

project.pledges.create!( amount: 10, delivery_date: "2015-06-01", details: "This is a fancy reward")
project.pledges.create!( amount: 20, delivery_date: "2015-06-01", details: "This is a fancier reward")
project.pledges.create!( amount: 30, delivery_date: "2015-06-01", details: "This is a fancy reward for people with too much money")
project.pledges.create!( amount: 40, delivery_date: "2015-06-01", details: "This is a fancy reward for idiots")
end