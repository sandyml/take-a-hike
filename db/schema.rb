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

ActiveRecord::Schema.define(version: 2023_04_05_220654) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amenities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "difficulties", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hike_difficulties", force: :cascade do |t|
    t.bigint "hike_id", null: false
    t.bigint "difficulty_id", null: false
    t.bigint "trailhead_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["difficulty_id"], name: "index_hike_difficulties_on_difficulty_id"
    t.index ["hike_id"], name: "index_hike_difficulties_on_hike_id"
    t.index ["trailhead_id"], name: "index_hike_difficulties_on_trailhead_id"
  end

  create_table "hikes", force: :cascade do |t|
    t.string "distance"
    t.string "elevation_gain"
    t.string "image_url"
    t.bigint "trailhead_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trailhead_id"], name: "index_hikes_on_trailhead_id"
  end

  create_table "trailhead_amenities", force: :cascade do |t|
    t.bigint "amenity_id", null: false
    t.bigint "trailhead_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["amenity_id"], name: "index_trailhead_amenities_on_amenity_id"
    t.index ["trailhead_id"], name: "index_trailhead_amenities_on_trailhead_id"
  end

  create_table "trailheads", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "direction"
    t.string "fees"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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
    t.boolean "visited"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trailhead_id"], name: "index_visits_on_trailhead_id"
    t.index ["user_id"], name: "index_visits_on_user_id"
  end

  add_foreign_key "hike_difficulties", "difficulties"
  add_foreign_key "hike_difficulties", "hikes"
  add_foreign_key "hike_difficulties", "trailheads"
  add_foreign_key "hikes", "trailheads"
  add_foreign_key "trailhead_amenities", "amenities"
  add_foreign_key "trailhead_amenities", "trailheads"
  add_foreign_key "visits", "trailheads"
  add_foreign_key "visits", "users"
end
