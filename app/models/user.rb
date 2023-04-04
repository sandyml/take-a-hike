class User < ApplicationRecord
 has_secure_password

 has_many :hikes
 has_many :visits, dependent: :destroy
 has_many :trailheads, through: :visits

 validates :username, presence: true, uniqueness: true
 validates :email, presence: true, uniqueness: true
 validates :password, length: { in: 6..10 }
end
