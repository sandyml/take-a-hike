class User < ApplicationRecord
 has_secure_password

 has_many :visits, dependent: :delete_all
 has_many :trailheads, through: :visits
 has_many :hikes

 validates :username, presence: true, uniqueness: true
 validates :email, presence: true, uniqueness: true
 validates :password, length: { in: 6..10 }
end
