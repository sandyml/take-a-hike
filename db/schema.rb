# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_04_04_004658) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hikes", force: :cascade do |t|
    t.string "difficulty"
    t.string "distance"
    t.string "elevation_gain"
    t.string "image_url"
    t.bigint "trailhead_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trailhead_id"], name: "index_hikes_on_trailhead_id"
  end

  create_table "trailheads", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "amenities"
    t.string "fees"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "direction"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "visits", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "trailhead_id", null: false
    t.datetime "visited_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trailhead_id"], name: "index_visits_on_trailhead_id"
    t.index ["user_id"], name: "index_visits_on_user_id"
  end

  add_foreign_key "hikes", "trailheads"
  add_foreign_key "visits", "trailheads"
  add_foreign_key "visits", "users"
end
